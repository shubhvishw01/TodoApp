import React, { useState } from "react";

function TodoItem({ todo, setTodos, setEditingId, editingId }) {
  const [editText, setEditText] = useState(todo.text);

  const isEditing = editingId === todo.id;

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleEdit = () => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (!editText.trim()) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo,
      ),
    );

    setEditingId(null);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
      />

      {isEditing ? (
        <div className="edit-mode">
          <input
            className="edit-input"
            type="text"
            value={editText}
            autoFocus
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave(todo.id)}
          />

          <div className="todo-actions">
            <button
              className="save-btn"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSave(todo.id)}
            >
              Save
            </button>

            <button
              className="cancel-btn"
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>

          <div className="todo-actions">
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
