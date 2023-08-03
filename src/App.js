import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [inpuValue, setInputValue] = useState("");
  const [address, setAddress] = useState("Hoi dan IT");

  const [todos, setTodos] = useState([
    { id: "todo 1", title: "doing somthing 1" },
    { id: "todo 2", title: "doing somthing 2" },
    { id: "todo 3", title: "doing somthing 3" },
  ]);

  const handleClick = () => {
    if (!inpuValue) {
      alert("Khong co input");
      return;
    }

    let newTodos = { id: "todo 4", title: inpuValue };
    setTodos([...todos, newTodos]);
    setInputValue("");
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, Học react với {address}</h1>
        <div>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </div>
        <input
          type="text"
          value={inpuValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
