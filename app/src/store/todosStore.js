import create from "zustand";

export const useTodos = create((set) => ({
  todos: [],

  addTodo: (todo) => set(({ todos }) => ({ todos: [...todos, todo] })),

  removeTodo: (selectedTodo) =>
    set(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== selectedTodo),
    })),

  updateTodo: (selectedTodo, title) =>
    set(({ todos }) =>
      todos.map((todo) =>
        todo.id === selectedTodo ? { ...todo, title } : todo
      )
    ),
}));
