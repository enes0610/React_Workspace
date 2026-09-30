import { Link } from "react-router-dom";
import { users } from "../data/users";

const Users = () => {
  return (
    <div>
      <h1>User List</h1>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;