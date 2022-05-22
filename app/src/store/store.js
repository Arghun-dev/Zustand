import { devtools, persist } from "zustand/middleware";
import { useTodos } from "./todosStore";
import { useTheme } from "./themeStore";

let stores = {
  useTodos,
  useTheme,
};

devtools(stores);
persist(stores);
