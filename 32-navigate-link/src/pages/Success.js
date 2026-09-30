import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "Guest";

  return (
    <div className="container">
      <h1>Success!</h1>
      <p>Welcome, {name}!</p>
      <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Success;