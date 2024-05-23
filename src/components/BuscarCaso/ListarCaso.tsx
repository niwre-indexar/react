import React from "react";
import { ICaso } from "../../Interfaces";

type Props = {
  data: ICaso[];
  onSelect?: (caso: ICaso) => void;
};

function ListarCaso({ data, onSelect }: Props) {
  // Convertir los IDs a números para la ordenación
  const sorter = (a: ICaso, b: ICaso) =>
    parseInt(a.id.toString()) - parseInt(b.id.toString());

  return (
    // Ordenar la lista por id
    <ul>
      {data.sort(sorter).map((caso) => (
        <li key={caso.id}>
          <button onClick={() => onSelect?.(caso)}>
            {caso.id} - {caso.origen}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListarCaso;
