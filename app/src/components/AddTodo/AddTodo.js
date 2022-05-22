import { useState } from "react";
import { Input, Button, message } from "antd";
import { v4 as uuid } from "uuid";
import { useTodos } from "../../store/todosStore";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodos();

  function add() {
    if (!inputValue.length) return message.error("please write some todo!");

    addTodo({ text: inputValue, id: uuid() });
    setInputValue("");
  }

  return (
    <div style={{ display: "flex" }}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="todo..."
        style={{ borderRadius: 4 }}
      />
      <Button
        type="primary"
        onClick={add}
        style={{ marginLeft: 4, borderRadius: 4 }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
