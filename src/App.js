import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <a>sdsd</a>
      </header>
    </div>
  );
}

export default App;
