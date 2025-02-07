import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// ✅ Add PropTypes validation
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

