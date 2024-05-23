import create from "zustand";
import { AreaRiesgoStore, IAreaRiesgo } from "../Interfaces";

export const useAreaRiesgoStore = create<AreaRiesgoStore>((set) => ({
  areasRiesgo: [],
  listAreasRiesgo: async () => {
    try {
      const response = await fetch(
        "https://switbj7jr8.execute-api.us-east-1.amazonaws.com/dev/parameter?type=area-riesgo"
      );
      const result = await response.json();
      set({ areasRiesgo: result });
    } catch (error) {
      console.error("Error al cargar las areas de riesgo: " + error.message);
    }
  },
  setAreasRiesgo: (areasRiesgo) =>
    set({ areasRiesgo: Array.isArray(areasRiesgo) ? areasRiesgo : [] }),
}));

export default useAreaRiesgoStore;
