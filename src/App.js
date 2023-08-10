import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Time from "./pages/Timer";
import Todo from "./pages/Todo App";
import Secret from "./pages/Secret";

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ backGround: "#282c34" }}>
          <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/time" element={<Time />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/secret" element={<Secret />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
