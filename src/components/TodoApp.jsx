import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import SearchTodos from "./SearchTodos";
import ListTodos from "./ListTodos";
import Pagination from "./Pagination";
import "../styles/TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase()),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className={`todo-app ${darkMode ? "dark" : ""}`}>
      <div className="todo-container">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <header className="todo-header">
          <h1>My Todo List</h1>
          <p>Stay organized and get things done.</p>
        </header>

        <AddTodo setTodos={setTodos} />

        <SearchTodos search={search} setSearch={setSearch} />

        <ListTodos
          search={search}
          filteredTodos={currentTodos}
          setTodos={setTodos}
          editingId={editingId}
          setEditingId={setEditingId}
        />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          todosPerPage={todosPerPage}
          totalTodos={filteredTodos.length}
        />
      </div>
    </div>
  );
}

export default TodoApp;
