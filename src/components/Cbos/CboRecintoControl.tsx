import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { IRecintoControl } from "../../Interfaces";
import { useRecintoControlStore } from "../../store/recintoControlStore";

const { Option } = Select;

interface CboRecintoControlProps {
  value?: string;
  onChange?: (value: string) => void;
}

const CboRecintoControl: React.FC<CboRecintoControlProps> = ({
  value,
  onChange,
}) => {
  const [error, setError] = useState<string | null>(null);
  const recintos = useRecintoControlStore((state) => state.recintosControl);
  const listRecintosControl = useRecintoControlStore(
    (state) => state.listRecintosControl
  );
  const setRecintosControl = useRecintoControlStore(
    (state) => state.setRecintosControl
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await listRecintosControl();
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los recintos: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [listRecintosControl]);

  useEffect(() => {
    setRecintosControl(recintos);
  }, [setRecintosControl, recintos]);

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
      {recintos.map((recinto: IRecintoControl) => (
        <Option
          key={recinto.id_recinto_control}
          value={recinto.id_recinto_control}
        >
          {recinto.recinto}
        </Option>
      ))}
    </Select>
  );
};

export default CboRecintoControl;
