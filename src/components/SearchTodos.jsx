import React from "react";

function SearchTodos({ setSearch }) {
  return (
    <div className="search-todo">
      <input
        type="text"
        placeholder="🔍  Search your todos..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchTodos;
