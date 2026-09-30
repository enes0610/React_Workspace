import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="btn" onClick={toggleTheme}>
      Şu Anki Tema: {theme === "light" ? "Açık" : "Koyu"} — Değiştir
    </button>
  );
};

export default ThemeToggle;