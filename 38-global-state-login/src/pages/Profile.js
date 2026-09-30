import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="container">
        <h2>Giriş yapılmadı.</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Profil Sayfası</h1>

      <div className="card">
        <h2>Hoşgeldin, {user.username}!</h2>

        <button className="logout-btn" onClick={handleLogout}>
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Profile;