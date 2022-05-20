import { devtools, persist } from "zustand/middleware";
import { useTodos } from "./todosStore";
import { useTheme } from "./themeStore";

let stores = {
  useTodos,
  useTheme,
};

persist(stores);
devtools(stores, { name: "store" });
