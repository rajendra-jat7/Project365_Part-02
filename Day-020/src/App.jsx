import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>✅ Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
