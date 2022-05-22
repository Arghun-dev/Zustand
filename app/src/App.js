import { Switch } from "antd";
import { useTheme } from "./store/themeStore";
import "./App.css";
import "antd/dist/antd.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";

function App() {
  const { darkMode, toggle } = useTheme();

  return (
    <div className={`App ${darkMode ? "darkMode" : "whiteMode"}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: 32,
        }}
      >
        <Switch defaultChecked onChange={(checked) => toggle(checked)} />
      </div>
      <div
        style={{
          width: "35%",
          margin: "auto",
          border: "1px solid #ccc",
          padding: 12,
        }}
      >
        <AddTodo />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
