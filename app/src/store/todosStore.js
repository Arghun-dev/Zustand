import create from "zustand";

export const useTodos = create((set) => ({
  todos: [],

  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

  removeTodo: (selectedTodo) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== selectedTodo),
    })),

  updateTodo: (selectedTodo, text) =>
    set((state) =>
      state.todos.map((todo) =>
        todo.id === selectedTodo ? { ...todo, text } : todo
      )
    ),
}));
