import React from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [username, setUsername] = useLocalStorage("username", "");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div className={`container ${theme}`}>
      <h1>Custom Hook: useLocalStorage</h1>

      <div className="section">
        <input
          type="text"
          value={username}
          placeholder="Kullanıcı adı"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Kayıtlı Kullanıcı: {username}</p>
      </div>

      <div className="section">
        <button className="btn" onClick={() => setTheme("light")}>Light Tema</button>
        <button className="btn" onClick={() => setTheme("dark")}>Dark Tema</button>
        <p>Aktif Tema: {theme}</p>
      </div>
    </div>
  );
}

export default App;