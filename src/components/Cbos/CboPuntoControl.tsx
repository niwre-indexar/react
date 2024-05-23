import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { IPuntoControl } from "../../Interfaces";
import { usePuntoControlStore } from "../../store/puntoControlStore";

const { Option } = Select;

interface CboPuntoControlProps {
  value?: string;
  onChange?: (value: string) => void;
}

const CboPuntoControl: React.FC<CboPuntoControlProps> = ({
  value,
  onChange,
}) => {
  const [error, setError] = useState<string | null>(null);
  const puntosControl = usePuntoControlStore((state) => state.puntosControl);
  const listPuntosControl = usePuntoControlStore(
    (state) => state.listPuntosControl
  );
  const setPuntosControl = usePuntoControlStore(
    (state) => state.setPuntosControl
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await listPuntosControl();
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los puntos de control: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [listPuntosControl]);

  useEffect(() => {
    setPuntosControl(puntosControl);
  }, [setPuntosControl, puntosControl]);

  return (
    <Select
      value={value}
      onChange={onChange}
      className="w-100"
      placeholder="Seleccionar opción"
      loading={loading}
      disabled={loading || !!error}
    >
      <Option value="">Seleccionar opción</Option>
      {puntosControl.map((puntoControl: IPuntoControl) => (
        <Option
          key={puntoControl.id_punto_control}
          value={puntoControl.id_punto_control}
        >
          {puntoControl.recinto_control}
        </Option>
      ))}
    </Select>
  );
};

export default CboPuntoControl;
