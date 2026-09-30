import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    login(username);
    navigate("/profile");
  };

  return (
    <div className="container">
      <h1>Giriş Yap</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Kullanıcı adı..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn" type="submit">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;