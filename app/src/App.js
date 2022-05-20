import { useRef } from "react";
import useStore from "./store";
import "./App.css";

function App() {
  const { people, addPeople } = useStore((state) => state);
  const inputRef = useRef();

  function add() {
    addPeople(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={add}>add people</button>
      {people.map((p, i) => (
        <div key={i}>{p}</div>
      ))}
    </div>
  );
}

export default App;
