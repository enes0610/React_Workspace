import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: 20, background: "#eee" }}>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
};

export default Navbar;