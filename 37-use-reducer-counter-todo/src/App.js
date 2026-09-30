import { useReducer, useState } from "react";
import { appReducer, initialState } from "./reducers/appReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!todoInput.trim()) return;
    dispatch({ type: "ADD_TODO", payload: todoInput });
    setTodoInput("");
  };

  return (
    <div className="container">
      <h1>useReducer Projesi</h1>

      {/* COUNTER */}
      <div className="card">
        <h2>Counter</h2>
        <p className="count">{state.count}</p>

        <div className="btn-group">
          <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
        </div>
      </div>

      {/* TODO */}
      <div className="card">
        <h2>Todo List</h2>

        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Todo yaz..."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button className="add-btn" type="submit">Ekle</button>
        </form>

        <ul className="todo-list">
          {state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="delete"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: index })
                }
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;