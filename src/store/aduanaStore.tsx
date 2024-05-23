import create from "zustand";
import { AduanaStore, IAduana } from "../Interfaces";

export const useAduanaStore = create<AduanaStore>((set) => ({
  aduanas: [],
  listAduanas: async () => {
    try {
      const response = await fetch(
        "https://switbj7jr8.execute-api.us-east-1.amazonaws.com/dev/parameter?type=aduana"
      );
      const result = await response.json();
      set({ aduanas: result });
    } catch (error) {
      console.error("Error al cargar las aduanas: " + error.message);
    }
  },
  setAduanas: (aduanas) =>
    set({ aduanas: Array.isArray(aduanas) ? aduanas : [] }),
}));

export default useAduanaStore;
