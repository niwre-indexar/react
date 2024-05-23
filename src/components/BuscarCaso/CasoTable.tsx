import React, { useEffect, useState } from "react";
import { Table, Dropdown, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { EyeOutlined } from "@ant-design/icons";
import { useCasoStore } from "../../store/casoStore";
import { useAreaRiesgoStore } from "../../store/areaRiesgoStore";
import { useTipoEstadoCasoStore } from "../../store/tipoEstadoCasoStore";
import "./BuscarCaso.css";
import "./CasoTable.css";

interface CasoTableProps {
  filters: {
    numeroCaso: string;
    origenCaso: string;
    fechaCreacionDesde: any;
    fechaCreacionHasta: any;
    estado: string;
    areaRiesgo: string;
    aduana: string;
    puntoControl: string;
    funcionarioAsignado: string;
  };
}

const CasoTable: React.FC<CasoTableProps> = ({ filters }) => {
  const [error, setError] = useState<string | null>(null);
  const casos = useCasoStore((state) => state.casos);
  const listCasos = useCasoStore((state) => state.listCasos);
  const deleteCaso = useCasoStore((state) => state.deleteCaso);
  const areasRiesgo = useAreaRiesgoStore((state) => state.areasRiesgo);
  const listAreasRiesgo = useAreaRiesgoStore((state) => state.listAreasRiesgo);
  const tiposEstadoCaso = useTipoEstadoCasoStore(
    (state) => state.tiposEstadoCaso
  );
  const listTiposEstadoCaso = useTipoEstadoCasoStore(
    (state) => state.listTiposEstadoCaso
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await listCasos();
        await listAreasRiesgo();
        await listTiposEstadoCaso();
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los casos: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [listCasos, listAreasRiesgo, listTiposEstadoCaso]);

  useEffect(() => {
    console.log("Casos:", casos); // Verificación de datos
    console.log("Areas de Riesgo:", areasRiesgo); // Verificación de datos
    console.log("Tipos de estado de caso:", tiposEstadoCaso); // Verificación de datos
  }, [casos, areasRiesgo, tiposEstadoCaso]);

  const handleDelete = (id: number) => {
    deleteCaso(id);
  };

  const formattedDate = (date: string) => {
    return format(new Date(date), "dd/MM/yyyy HH:mm");
  };

  const handleEdit = (id: number) => {
    navigate(`/EditarCaso/${id}`);
  };

  const items = [
    {
      key: "1",
      label: (
        <Button className="btn-accion" onClick={() => handleEdit(1)}>
          Editar
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button className="btn-accion" type="text">
          Asignar/reasignar
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button className="btn-accion" type="text">
          Ver caso
        </Button>
      ),
    },
    {
      key: "4",
      label: (
        <Button className="btn-accion" type="text">
          Ver acciones fiscalización
        </Button>
      ),
    },
    {
      key: "5",
      label: (
        <Button className="btn-accion" type="text">
          Ver traza
        </Button>
      ),
    },
    {
      key: "6",
      label: (
        <Button className="btn-accion" type="text">
          Anular caso
        </Button>
      ),
    },
    {
      key: "7",
      label: (
        <Button className="btn-accion" type="text">
          Ingresar Resultados
        </Button>
      ),
    },
    {
      key: "8",
      label: (
        <Button className="btn-accion" type="text">
          Ver resultado
        </Button>
      ),
    },
    {
      key: "9",
      label: (
        <Button className="btn-accion" type="text">
          Aprobar / Rectificar caso
        </Button>
      ),
    },
    {
      key: "10",
      label: (
        <Button className="btn-accion" type="text">
          Ver historial
        </Button>
      ),
    },
  ];

  const getAreaRiesgoNames = (areaIds: string[]) => {
    if (!areasRiesgo || areasRiesgo.length === 0) return "Sin información";
    return areaIds
      .map(
        (id) =>
          areasRiesgo.find((area) => area.id.toString() === id)?.name ||
          "Sin información"
      )
      .join(", ");
  };

  const getTipoEstadoCasoName = (id: string) => {
    if (!tiposEstadoCaso || tiposEstadoCaso.length === 0)
      return "Sin información";
    return (
      tiposEstadoCaso.find((tipo) => tipo.id.toString() === id)?.name ||
      "Sin información"
    );
  };

  const filteredCasos = casos.filter((caso) => {
    const {
      numero,
      origen,
      fechaocurrencia,
      estadocaso,
      areaRiesgo,
      aduana,
      puntocontrol,
      funcionariocreador,
      fecharegistro,
    } = caso;

    const {
      numeroCaso,
      origenCaso,
      fechaCreacionDesde,
      fechaCreacionHasta,
      estado,
      areaRiesgo: filterAreaRiesgo,
      aduana: filterAduana,
      puntoControl,
      funcionarioAsignado,
    } = filters;

    const fechaCreacion = new Date(fechaocurrencia);
    const fechaDeteccion = new Date(fecharegistro);

    return (
      (!numeroCaso || numero.toString().includes(numeroCaso)) &&
      (!origenCaso || origen.toString().includes(origenCaso)) &&
      (!fechaCreacionDesde || fechaCreacion >= fechaCreacionDesde) &&
      (!fechaCreacionHasta || fechaCreacion <= fechaCreacionHasta) &&
      (!estado || estadocaso.toString().includes(estado)) &&
      (!filterAreaRiesgo ||
        (Array.isArray(areaRiesgo) ? areaRiesgo : [areaRiesgo]).some((riesgo) =>
          riesgo
            .toString()
            .toLowerCase()
            .includes(filterAreaRiesgo.toLowerCase())
        )) &&
      (!filterAduana || aduana.toString().includes(filterAduana)) &&
      (!puntoControl || puntocontrol?.includes(puntoControl)) &&
      (!funcionarioAsignado ||
        funcionariocreador?.toString().includes(funcionarioAsignado))
    );
  });

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Table
          dataSource={filteredCasos}
          pagination={{ pageSize: 10 }}
          rowKey="id"
        >
          <Table.Column
            title="N° Caso"
            dataIndex="numero"
            key="numero"
            sorter={(a, b) => a.numero.localeCompare(b.numero)}
            render={(text) => text || "Sin información"}
          />
          <Table.Column
            title="Origen Caso"
            dataIndex="origen"
            key="origen"
            sorter={(a, b) => a.origen.localeCompare(b.origen)}
            render={(text) => text || "Sin información"}
          />
          <Table.Column
            title="Descripción"
            dataIndex="descripcion"
            key="descripcion"
            sorter={(a, b) =>
              (a.descripcion || "").localeCompare(b.descripcion || "")
            }
            render={(text) => text || "Sin información"}
          />
          <Table.Column
            title="Estado"
            dataIndex="estadocaso"
            key="estadocaso"
            sorter={(a, b) =>
              getTipoEstadoCasoName(a.estadocaso).localeCompare(
                getTipoEstadoCasoName(b.estadocaso)
              )
            }
            render={(text) =>
              text ? getTipoEstadoCasoName(text) : "Sin información"
            }
          />
          <Table.Column
            title="Fecha de creación"
            dataIndex="fechaocurrencia"
            key="fechaocurrencia"
            render={(text) =>
              text
                ? formattedDate(new Date(text.toString()).toISOString())
                : "Sin información"
            }
            sorter={(a, b) =>
              Number(new Date(a.fechaocurrencia)) -
              Number(new Date(b.fechaocurrencia))
            }
          />
          <Table.Column
            title="Asignado"
            dataIndex="funcionariocreador"
            key="funcionariocreador"
            sorter={(a, b) =>
              (a.funcionariocreador || "").localeCompare(
                b.funcionariocreador || ""
              )
            }
            render={(text) => text || "Sin información"}
          />
          <Table.Column
            title="Fecha de Detección/Hallazgo"
            dataIndex="fecharegistro"
            key="fecharegistro"
            render={(text) =>
              text
                ? formattedDate(new Date(text.toString()).toISOString())
                : "Sin información"
            }
            sorter={(a, b) =>
              new Date(a.fecharegistro).getTime() -
              new Date(b.fecharegistro).getTime()
            }
          />
          <Table.Column
            title="Punto de control"
            dataIndex="puntocontrol"
            key="puntocontrol"
            sorter={(a, b) =>
              (a.puntocontrol || "").localeCompare(b.puntocontrol || "")
            }
            render={(text) => text || "Sin información"}
          />
          <Table.Column
            title="Días sin asignar"
            dataIndex="funcionariocreador"
            key="funcionariocreador"
            sorter={(a, b) =>
              (a.funcionariocreador || "").localeCompare(
                b.funcionariocreador || ""
              )
            }
            render={(text) => text || "Sin información"}
          />
          <Table.Column
            title="Área de riesgo"
            dataIndex="areaRiesgo"
            key="areaRiesgo"
            sorter={(a, b) =>
              getAreaRiesgoNames(a.areaRiesgo).localeCompare(
                getAreaRiesgoNames(b.areaRiesgo)
              )
            }
            render={(text) =>
              text && text.length > 0
                ? getAreaRiesgoNames(text)
                : "Sin información"
            }
          />
          <Table.Column
            title="Acciones"
            key="acciones"
            render={() => (
              <Dropdown
                className="drop-dwn"
                menu={{ items }}
                placement="bottomRight"
              >
                <a>
                  <EyeOutlined />
                </a>
              </Dropdown>
            )}
          />
        </Table>
      )}
    </div>
  );
};

export default CasoTable;
