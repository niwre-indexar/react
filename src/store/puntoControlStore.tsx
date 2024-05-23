import create from "zustand";
import { PuntoControlStore, IPuntoControl } from "../Interfaces";

export const usePuntoControlStore = create<PuntoControlStore>((set) => ({
  puntosControl: [],
  listPuntosControl: async () => {
    try {
      const response = await fetch(
        "https://1ubch2tz02.execute-api.us-east-1.amazonaws.com/default/pfi-saaf-list?type=punto-control"
      );
      const result = await response.json();
      set({ puntosControl: result });
    } catch (error) {
      console.error("Error al cargar los puntos de control: " + error.message);
    }
  },
  setPuntosControl: (puntosControl) =>
    set({
      puntosControl: Array.isArray(puntosControl) ? puntosControl : [],
    }),
}));

export default usePuntoControlStore;
