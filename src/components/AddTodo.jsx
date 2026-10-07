import React, { useState } from "react";

function AddTodo({ setTodos }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={handleChange}
          placeholder="What needs to be done?"
        />

        <button type="submit">+ Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
