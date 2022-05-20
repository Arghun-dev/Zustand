import { useRef } from "react";
import { Switch } from "antd";
import { useTodos } from "./store/todosStore";
import { useTheme } from "./store/themeStore";
import { v4 as uuid } from "uuid";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const { todos, addTodo, removeTodo, updateTodo } = useTodos();
  const { darkMode, toggle } = useTheme();
  const inputRef = useRef();

  function add() {
    if (!inputRef.current.value) return;

    addTodo({ text: inputRef.current.value, id: uuid() });
    inputRef.current.value = "";
  }

  return (
    <div className={`App ${darkMode ? "darkMode" : "whiteMode"}`}>
      <Switch defaultChecked onChange={(checked) => toggle(checked)} />
      <input ref={inputRef} />
      <button onClick={add}>Add</button>
      {!!todos.length && todos.map((t) => <div key={t.id}>{t.text}</div>)}
    </div>
  );
}

export default App;
