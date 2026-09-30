import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1>Theme Switcher App</h1>
        <p>Bu uygulama Context API ile global tema yönetimi örneğidir.</p>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;