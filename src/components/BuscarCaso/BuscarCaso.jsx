import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Card,
  Row,
  Col,
  Input,
  Select,
  DatePicker,
  Button,
  Space,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CasoTable from "./CasoTable";
// import CboAduanas from "../Cbos/CboAduanas";
// import CboAreaRiesgo from "../Cbos/CboAreaRiesgo";
import "./BuscarCaso.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import "./CasoTable.css"; // Ajusta la ruta según la ubicación de tu archivo CSS

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Content } = Layout;

export const BuscarCaso = () => {
  const [filters, setFilters] = useState({
    numeroCaso: "",
    origenCaso: "",
    fechaCreacionDesde: null,
    fechaCreacionHasta: null,
    estado: "",
    areaRiesgo: "",
    aduana: "",
    puntoControl: "",
    funcionarioAsignado: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    // Aquí podrías realizar alguna acción adicional en el momento de la búsqueda
  };

  const handleReset = () => {
    setFilters({
      numeroCaso: "",
      origenCaso: "",
      fechaCreacionDesde: null,
      fechaCreacionHasta: null,
      estado: "",
      areaRiesgo: "",
      aduana: "",
      puntoControl: "",
      funcionarioAsignado: "",
    });
  };

  return (
    <Layout>
      <Header />
      <Content
        style={{ minHeight: "calc(100vh - 100px)", paddingBottom: "100px" }}
      >
        <div className="container">
          <Card>
            <h5>Módulo de detección/hallazgo - Buscar caso</h5>
            <br />
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <label>N° caso:</label>
                <Input
                  type="number"
                  value={filters.numeroCaso}
                  onChange={(e) =>
                    handleFilterChange("numeroCaso", e.target.value)
                  }
                />
              </Col>
              <Col span={6}>
                <label>Origen caso:</label>
                <Select
                  className="w-100"
                  value={filters.origenCaso}
                  onChange={(value) => handleFilterChange("origenCaso", value)}
                >
                  <Option value="value1">Value 1</Option>
                  <Option value="value2">Value 2</Option>
                </Select>
              </Col>
              <Col span={12}>
                <label>Fecha de creación desde - hasta:</label>
                <RangePicker
                  className="w-100"
                  value={[
                    filters.fechaCreacionDesde,
                    filters.fechaCreacionHasta,
                  ]}
                  onChange={(dates) =>
                    handleFilterChange("fechaCreacion", dates)
                  }
                />
              </Col>
              <Col span={6}>
                <label>Estado:</label>
                <Select
                  className="w-100"
                  value={filters.estado}
                  onChange={(value) => handleFilterChange("estado", value)}
                >
                  <Option value="value1">Value 1</Option>
                  <Option value="value2">Value 2</Option>
                </Select>
              </Col>
              <Col span={6}>
                <label>Área de riesgo:</label>
                {/* <CboAreaRiesgo
                  value={filters.areaRiesgo}
                  onChange={(value) => handleFilterChange("areaRiesgo", value)}
                /> */}
              </Col>
              <Col span={6}>
                <label>Aduana:</label>
                {/* <CboAduanas
                  value={filters.aduana}
                  onChange={(value) => handleFilterChange("aduana", value)}
                /> */}
              </Col>
              <Col span={6}>
                <label>Punto de control:</label>
                <Select
                  className="w-100"
                  value={filters.puntoControl}
                  onChange={(value) =>
                    handleFilterChange("puntoControl", value)
                  }
                >
                  <Option value="value1">Value 1</Option>
                  <Option value="value2">Value 2</Option>
                </Select>
              </Col>
              <Col span={6}>
                <label>Funcionario asignado:</label>
                <Select
                  className="w-100"
                  value={filters.funcionarioAsignado}
                  onChange={(value) =>
                    handleFilterChange("funcionarioAsignado", value)
                  }
                >
                  <Option value="value1">Value 1</Option>
                  <Option value="value2">Value 2</Option>
                </Select>
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={24}>
                <Space>
                  <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    onClick={handleSearch}
                  >
                    Buscar
                  </Button>
                  <Button icon={<CloseCircleOutlined />} onClick={handleReset}>
                    Limpiar filtro
                  </Button>
                </Space>
              </Col>
            </Row>
          </Card>
          <br />
          <div className="text-end">
            <Link to="/CrearCaso">
              <Button type="primary" icon={<PlusOutlined />}>
                Nuevo caso
              </Button>
            </Link>
          </div>
          <br />
          <div className="table-responsive">
            <CasoTable filters={filters} />
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default BuscarCaso;
