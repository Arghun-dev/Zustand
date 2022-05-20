import create from "zustand";

export const useTheme = create((set) => ({
  darkMode: false,

  toggle: () => set((state) => ({ darkMode: !state.darkMode })),
}));
