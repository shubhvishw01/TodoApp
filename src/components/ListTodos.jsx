import TodoItem from "./TodoItem";

function ListTodos({
  search,
  filteredTodos,
  setTodos,
  setEditingId,
  editingId,
}) {
  if (filteredTodos.length === 0) {
    return (
      <div className="empty-todos">
        <div className="empty-icon">✓</div>

        <h3>{search.length > 0 ? "No todos found" : "No todos yet"}</h3>

        <p>
          {search.length > 0
            ? `No todos match "${search}".`
            : "Add your first task and start getting things done."}
        </p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="list-heading">
        <h3>My Tasks</h3>
        <span>{filteredTodos.length} tasks</span>
      </div>

      {filteredTodos.map((todo) => (
        <div className="todo-item-wrapper" key={todo.id}>
          <TodoItem
            todo={todo}
            setTodos={setTodos}
            editingId={editingId}
            setEditingId={setEditingId}
          />
        </div>
      ))}
    </div>
  );
}

export default ListTodos;
