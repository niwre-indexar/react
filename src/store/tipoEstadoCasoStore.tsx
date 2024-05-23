import create from "zustand";
import { TipoEstadoCasoStore, ITipoEstadoCaso } from "../Interfaces";

export const useTipoEstadoCasoStore = create<TipoEstadoCasoStore>((set) => ({
  tiposEstadoCaso: [],
  listTiposEstadoCaso: async () => {
    try {
      const response = await fetch(
        "https://1ubch2tz02.execute-api.us-east-1.amazonaws.com/default/pfi-saaf-list?type=tipo-estado-caso"
      );
      const result = await response.json();
      set({ tiposEstadoCaso: result });
    } catch (error) {
      console.error(
        "Error al cargar los tipos de estado de caso: " + error.message
      );
    }
  },
  setTiposEstadoCaso: (tiposEstadoCaso) =>
    set({
      tiposEstadoCaso: Array.isArray(tiposEstadoCaso) ? tiposEstadoCaso : [],
    }),
}));

export default useTipoEstadoCasoStore;
