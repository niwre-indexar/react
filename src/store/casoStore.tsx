import create from "zustand";
import { CasoStore, ICaso } from "../Interfaces";

export const useCasoStore = create<CasoStore>((set) => ({
  casos: [],
  listCasos: async () => {
    try {
      const response = await fetch(
        "https://switbj7jr8.execute-api.us-east-1.amazonaws.com/dev/case"
      );
      const result = await response.json();
      console.log("Fetched data:", result);
      const data: ICaso[] = result.body; // Usar result.body directamente
      set({ casos: Array.isArray(data) ? data : [] });
    } catch (error) {
      console.error("Failed to fetch casos:", error);
      set({ casos: [] });
    }
  },
  setCasos: (casos) => set({ casos: Array.isArray(casos) ? casos : [] }),
  addCaso: async (caso) => {
    try {
      const response = await fetch(
        "https://switbj7jr8.execute-api.us-east-1.amazonaws.com/dev/case",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(caso),
        }
      );
      const result = await response.json();
      const data: ICaso = result.body; // Asumiendo que result.body contiene el caso añadido
      set((state) => ({ casos: [...state.casos, data] }));
    } catch (error) {
      console.error("Failed to add caso:", error);
    }
  },
  updateCaso: async (caso) => {
    try {
      const response = await fetch(
        `https://switbj7jr8.execute-api.us-east-1.amazonaws.com/dev/case/${caso.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(caso),
        }
      );
      const result = await response.json();
      const data: ICaso = result.body; // Asumiendo que result.body contiene el caso actualizado
      set((state) => ({
        casos: state.casos.map((c) => (c.id === caso.id ? data : c)),
      }));
    } catch (error) {
      console.error("Failed to update caso:", error);
    }
  },
  deleteCaso: async (id) => {
    try {
      await fetch(
        `https://switbj7jr8.execute-api.us-east-1.amazonaws.com/dev/case/${id}`,
        {
          method: "DELETE",
        }
      );
      set((state) => ({
        casos: state.casos.filter((c) => c.id !== id),
      }));
    } catch (error) {
      console.error("Failed to delete caso:", error);
    }
  },
}));

export default useCasoStore;
