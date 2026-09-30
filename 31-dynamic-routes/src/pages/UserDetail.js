import { useParams } from "react-router-dom";
import { users } from "../data/users";

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div className="user-detail">
      <h1>User Detail</h1>
      <h3>ID: {user.id}</h3>
      <p>Name: {user.name}</p>
      <p>Job: {user.job}</p>
    </div>
  );
};

export default UserDetail;