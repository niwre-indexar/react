import React, { useEffect, useState } from "react";
import { ITipoEstadoCaso } from "../../Interfaces";
import { Select } from "antd";

import { useTipoEstadoCasoStore } from "../../store/tipoEstadoCasoStore";

const { Option } = Select;

interface CboTipoEstadoCasoProps {
  value?: string;
  onChange?: (value: string) => void;
}

const CboTipoEstadoCaso: React.FC<CboTipoEstadoCasoProps> = ({
  value,
  onChange,
}) => {
  const [error, setError] = useState<string | null>(null);
  const tiposEstadoCaso = useTipoEstadoCasoStore(
    (state) => state.tiposEstadoCaso
  );
  const listTiposEstadoCaso = useTipoEstadoCasoStore(
    (state) => state.listTiposEstadoCaso
  );
  const setTiposEstadoCaso = useTipoEstadoCasoStore(
    (state) => state.setTiposEstadoCaso
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await listTiposEstadoCaso();
        setLoading(false);
      } catch (error) {
        setError(
          "Error al cargar los tipos de estado de caso: " + error.message
        );
        setLoading(false);
      }
    };

    fetchData();
  }, [listTiposEstadoCaso]);

  useEffect(() => {
    setTiposEstadoCaso(tiposEstadoCaso);
  }, [setTiposEstadoCaso, tiposEstadoCaso]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Select
          value={value}
          onChange={onChange}
          className="w-100"
          placeholder="Seleccionar opción"
          loading={loading}
          disabled={loading || !!error}
        >
          <Option value="">Seleccionar opción</Option>

          {tiposEstadoCaso.map((tipoEstadoCaso: ITipoEstadoCaso) => (
            <Option key={tipoEstadoCaso.id} value={tipoEstadoCaso.id}>
              {tipoEstadoCaso.name}
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default CboTipoEstadoCaso;
