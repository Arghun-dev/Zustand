import create from "zustand";

const useStore = create((set) => ({
  people: ["arghun", "fati", "shahla", "sahand"],
  addPeople: (person) =>
    set((state) => ({ people: [...state.people, person] })),
}));

export default useStore;
