import create from "zustand";
import { RecintoControlStore, IRecintoControl } from "../Interfaces";

export const useRecintoControlStore = create<RecintoControlStore>((set) => ({
  recintosControl: [],
  listRecintosControl: async () => {
    try {
      const response = await fetch(
        "https://1ubch2tz02.execute-api.us-east-1.amazonaws.com/default/pfi-saaf-list?type=recinto-control"
      );
      const result = await response.json();
      set({ recintosControl: result });
    } catch (error) {
      console.error("Error al cargar las areas de riesgo: " + error.message);
    }
  },
  setRecintosControl: (recintosControl) =>
    set({
      recintosControl: Array.isArray(recintosControl) ? recintosControl : [],
    }),
}));

export default useRecintoControlStore;
