import { useTodos } from "../../store/todosStore";

const TodosList = () => {
  const { todos, removeTodo } = useTodos();

  if (!todos.length) return <p>There is no todo!</p>;

  return todos.map((t) => (
    <div key={t.id}>
      {t.text}
      <span style={{ color: "red" }} onClick={() => removeTodo(t.id)}>
        x
      </span>
    </div>
  ));
};

export default TodosList;
