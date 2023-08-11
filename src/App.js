import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Time from "./pages/Timer";
import Todo from "./pages/Todo App";
import Secret from "./pages/Secret";
import Blog from "./pages/Blog";
import DetailBlog from "./pages/Blog/DetailBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/time" element={<Time />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<DetailBlog />}></Route>
            <Route path="/secret" element={<Secret />}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
