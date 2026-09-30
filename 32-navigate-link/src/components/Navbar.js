import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
      <NavLink to="/form" className={({ isActive }) => isActive ? "active" : ""}>
        Form
      </NavLink>
    </nav>
  );
};

export default Navbar;