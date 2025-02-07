import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "./TodoList.css";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul className="todo-list">
      {todos.length === 0 ? <p>No tasks yet! 🎉</p> : todos.map(todo => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
