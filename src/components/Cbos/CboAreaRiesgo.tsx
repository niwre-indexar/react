import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { IAreaRiesgo } from "../../Interfaces";
import { useAreaRiesgoStore } from "../../store/areaRiesgoStore";

const { Option } = Select;

interface CboAreaRiesgoProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

const CboAreaRiesgo: React.FC<CboAreaRiesgoProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null);
  const areasRiesgo = useAreaRiesgoStore((state) => state.areasRiesgo);
  const listAreasRiesgo = useAreaRiesgoStore((state) => state.listAreasRiesgo);
  const setAreasRiesgo = useAreaRiesgoStore((state) => state.setAreasRiesgo);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await listAreasRiesgo();
        setLoading(false);
      } catch (error) {
        setError("Error al cargar las áreas de riesgo: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [listAreasRiesgo]);

  useEffect(() => {
    setAreasRiesgo(areasRiesgo);
  }, [setAreasRiesgo, areasRiesgo]);

  return (
    <Select
      mode="multiple"
      value={value}
      onChange={onChange}
      className="w-100"
      placeholder="Seleccionar área de Riesgo"
      loading={loading}
      disabled={loading || !!error}
    >
      {areasRiesgo.map((areaRiesgo: IAreaRiesgo) => (
        <Option key={areaRiesgo.id} value={areaRiesgo.id}>
          {areaRiesgo.name}
        </Option>
      ))}
    </Select>
  );
};

export default CboAreaRiesgo;
