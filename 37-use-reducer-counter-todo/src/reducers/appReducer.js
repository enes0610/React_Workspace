export const initialState = {
  count: 0,
  todos: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    // COUNTER
    case "INCREASE":
      return { ...state, count: state.count + 1 };

    case "DECREASE":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    // TODO
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    default:
      return state;
  }
};