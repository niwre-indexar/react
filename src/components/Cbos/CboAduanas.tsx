import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { IAduana } from "../../Interfaces";
import { useAduanaStore } from "../../store/aduanaStore";

const { Option } = Select;

interface CboAduanasProps {
  value?: string;
  onChange?: (value: string) => void;
}

const CboAduanas: React.FC<CboAduanasProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null);
  const aduanas = useAduanaStore((state) => state.aduanas);
  const listAduanas = useAduanaStore((state) => state.listAduanas);
  const setAduanas = useAduanaStore((state) => state.setAduanas);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await listAduanas();
        setLoading(false);
      } catch (error) {
        setError("Error al cargar las aduanas: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [listAduanas]);

  useEffect(() => {
    setAduanas(aduanas);
  }, [setAduanas, aduanas]);

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
      {aduanas.map((aduana: IAduana) => (
        <Option key={aduana.id} value={aduana.id}>
          {aduana.name}
        </Option>
      ))}
    </Select>
  );
};

export default CboAduanas;
