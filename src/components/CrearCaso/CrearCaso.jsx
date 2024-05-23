import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DatePicker,
  Select,
  Input,
  Button,
  Modal,
  Upload,
  Card,
  Form,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CboAreaRiesgo from "../Cbos/CboAreaRiesgo";
import CboPuntoControl from "../Cbos/CboPuntoControl";
import CboAduanas from "../Cbos/CboAduanas";
import CboRecintoControl from "../Cbos/CboRecintoControl";
import CboTipoEstadoCaso from "../Cbos/CboTipoEstadoCaso";
import useCasoStore from "../../store/casoStore";
import "./CrearCaso.css";

const { TextArea } = Input;

export const CrearCaso = () => {
  const navigate = useNavigate();
  const addCaso = useCasoStore((state) => state.addCaso);

  const [form] = Form.useForm();
  const [fechaHora, setFechaHora] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (info) => {
    if (info.file.status === "done") {
      setSelectedFile(info.file.originFileObj);
    }
  };

  const handleFechaHoraChange = (date) => {
    setFechaHora(date);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const showConfirm = (values) => {
    Modal.confirm({
      title: "¿Desea añadir el caso?",
      onOk: () => handleSave(values),
      onCancel() {},
    });
  };

  const handleSave = async (values) => {
    //AQUÍ IRÍAN LOS CAMPOS DEL FORMULARIO QUE SE DESEAN GUARDAR EN LA BASE DE DATOS
    //EJEMPLO: DH_FECHA_HORA_OCURRENCIA: fechaHora ? fechaHora.toISOString() : null
    const nuevoCaso = {
      numeroCaso: 0,
      origenCaso: values.origen_caso,
      estado: values.estado,
      areaRiesgo: values.area_riesgo,
      descripcionCorta: values.descripcion_corta,
      descripcionCaso: values.descripcion_caso,
      fechaHoraOcurrencia: fechaHora ? fechaHora.toISOString() : null,
      aduana: values.aduana,
      recinto: values.recinto,
      puntoControl: values.punto_control,
      otraAvanzada: values.otra_avanzada,
      funcionarioSelector: values.funcionario_selector,
      funcionarioDetector: values.funcionario_detector,
      funcionarioAsignado: values.funcionario_asignado,
      archivo: selectedFile,
    };

    try {
      await addCaso(nuevoCaso);
      notification.success({
        message: "Caso guardado",
        description: `El caso n° ${nuevoCaso.numeroCaso} se ha guardado correctamente.`,
      });
      navigate("/BuscarCaso");
    } catch (error) {
      console.error("Error al guardar el caso:", error);
    }
  };

  return (
    <>
      <Header />
      <br />
      <div className="container-buscar">
        <Card title="Módulo de detección/hallazgo - Nuevo caso">
          <Form
            layout="vertical"
            form={form}
            onFinish={showConfirm}
            initialValues={{
              origen_caso: "",
              estado: "",
              area_riesgo: "",
              descripcion_corta: "",
              descripcion_caso: "",
              aduana: "",
              recinto: "",
              punto_control: "",
              otra_avanzada: "",
              funcionario_selector: "",
              funcionario_detector: "",
              funcionario_asignado: "",
            }}
          >
            <Form.Item
              label="Origen del caso:"
              name="origen_caso"
              rules={[
                {
                  required: true,
                  message: "Por favor, seleccione el origen del caso",
                },
              ]}
            >
              <Select placeholder="Seleccione el origen del caso">
                <Select.Option value="value1">Hallazgo</Select.Option>
                <Select.Option value="value2">Detección</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Estado:"
              name="estado"
              rules={[
                { required: true, message: "Por favor, seleccione el estado" },
              ]}
            >
              <CboTipoEstadoCaso />
            </Form.Item>
            <Form.Item
              label="Área de Riesgo:"
              name="area_riesgo"
              rules={[
                {
                  required: true,
                  message: "Por favor, seleccione el área de riesgo",
                },
              ]}
            >
              <CboAreaRiesgo />
            </Form.Item>
            <Form.Item
              label="Descripción corta:"
              name="descripcion_corta"
              rules={[
                {
                  required: true,
                  message: "Por favor, ingrese una descripción corta",
                },
              ]}
            >
              <TextArea rows={3} />
            </Form.Item>
            <Form.Item
              label="Descripción del caso:"
              name="descripcion_caso"
              rules={[
                {
                  required: true,
                  message: "Por favor, ingrese una descripción del caso",
                },
              ]}
            >
              <TextArea rows={5} />
            </Form.Item>
            <Form.Item
              label="Fecha y hora de ocurrencia:"
              rules={[
                {
                  required: true,
                  message:
                    "Por favor, seleccione la fecha y hora de ocurrencia",
                },
              ]}
            >
              <DatePicker
                showTime={{ format: "HH:mm", use12Hours: false }}
                format="YYYY-MM-DD HH:mm"
                onChange={handleFechaHoraChange}
                placeholder="Seleccione la fecha y hora"
                value={fechaHora}
                style={{ padding: "10px" }}
              />
            </Form.Item>
            <Card title="Punto de control">
              <Form.Item
                label="Aduana:"
                name="aduana"
                rules={[
                  {
                    required: true,
                    message: "Por favor, seleccione la aduana",
                  },
                ]}
              >
                <CboAduanas />
              </Form.Item>
              <Form.Item
                label="Recinto:"
                name="recinto"
                rules={[
                  {
                    required: true,
                    message: "Por favor, seleccione el recinto",
                  },
                ]}
              >
                <CboRecintoControl />
              </Form.Item>
              <Form.Item
                label="Avanzada o punto de control:"
                name="punto_control"
                rules={[
                  {
                    required: true,
                    message: "Por favor, seleccione el punto de control",
                  },
                ]}
              >
                <CboPuntoControl />
              </Form.Item>
              <Form.Item
                label="Otra avanzada o punto de control:"
                name="otra_avanzada"
              >
                <Input />
              </Form.Item>
            </Card>
            <Form.Item
              label="Funcionario selector:"
              name="funcionario_selector"
              rules={[
                {
                  required: true,
                  message: "Por favor, seleccione el funcionario selector",
                },
              ]}
            >
              <Select placeholder="Seleccione un funcionario">
                <Select.Option value="value1">Valor 1</Select.Option>
                <Select.Option value="value2">Valor 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Funcionario detector:"
              name="funcionario_detector"
              rules={[
                {
                  required: true,
                  message: "Por favor, seleccione el funcionario detector",
                },
              ]}
            >
              <Select placeholder="Seleccione un funcionario">
                <Select.Option value="value1">Valor 1</Select.Option>
                <Select.Option value="value2">Valor 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Funcionario asignado:"
              name="funcionario_asignado"
              rules={[
                {
                  required: true,
                  message: "Por favor, seleccione el funcionario asignado",
                },
              ]}
            >
              <Select placeholder="Seleccione un funcionario">
                <Select.Option value="value1">Valor 1</Select.Option>
                <Select.Option value="value2">Valor 2</Select.Option>
              </Select>
              <Link to="#">Asignarme a mí (solo jefe de turno)</Link>
            </Form.Item>
            <Card title="Imágenes/Videos">
              <Button onClick={toggleModal} icon={<UploadOutlined />}>
                Seleccionar Imagen/Videos
              </Button>
              <Upload beforeUpload={() => false} onChange={handleFileChange}>
                <Button icon={<UploadOutlined />}>Subir Archivo</Button>
              </Upload>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre archivo</th>
                    <th>Fecha</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Archivo1.jpg</td>
                    <td>2024-04-25</td>
                    <td>
                      <Button className="me-2">Ver</Button>
                      <Button danger>Quitar</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <Card title="Documentos anexos">
              <Button onClick={toggleModal2} icon={<UploadOutlined />}>
                Seleccionar Documentos Anexos
              </Button>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo documento</th>
                    <th>Fecha</th>
                    <th>Número</th>
                    <th>Descripción</th>
                    <th>Archivo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Documento1</td>
                    <td>2024-04-25</td>
                    <td>12345</td>
                    <td>Descripción1</td>
                    <td>Archivo1.pdf</td>
                    <td>
                      <Button className="me-2">Ver</Button>
                      <Button className="me-2">Editar</Button>
                      <Button danger>Quitar</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <div className="text-center">
              <Button type="primary" className="me-2" htmlType="submit">
                Guardar
              </Button>
              <Link to="/BuscarCaso">
                <Button type="primary">Volver</Button>
              </Link>
            </div>
          </Form>
        </Card>
      </div>
      <Modal open={showModal2} onCancel={closeModal2} footer={null}>
        <Form layout="vertical">
          <Form.Item label="Tipo documento:">
            <Select placeholder="Seleccione el tipo de documento">
              <Select.Option value="value1">Valor 1</Select.Option>
              <Select.Option value="value2">Valor 2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Número documento:">
            <Input />
          </Form.Item>
          <Form.Item label="Otro número documento:">
            <Input />
          </Form.Item>
          <Form.Item label="Descripción otro tipo documento:">
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item label="Seleccionar archivo:">
            <Upload beforeUpload={() => false} onChange={handleFileChange}>
              <Button icon={<UploadOutlined />}>Subir Archivo</Button>
            </Upload>
          </Form.Item>
          <Button type="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Form>
      </Modal>
      <Modal open={showModal} onCancel={closeModal} footer={null}>
        <h2>Cargar Archivo</h2>
        <Upload beforeUpload={() => false} onChange={handleFileChange}>
          <Button icon={<UploadOutlined />}>Subir Archivo</Button>
        </Upload>
        <Button type="primary" className="mt-3">
          Guardar
        </Button>
      </Modal>
      <Footer />
    </>
  );
};

export default CrearCaso;
