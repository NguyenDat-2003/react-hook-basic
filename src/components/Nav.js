import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="topnav">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink to="/time">Timer App</NavLink>
      <NavLink to="/todo">Todo App</NavLink>
      <NavLink to="/blog">Blog Page</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
}

export default Nav;
