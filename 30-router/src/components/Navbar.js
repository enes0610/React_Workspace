import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/about" style={{ marginRight: 20 }}>
        About
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;