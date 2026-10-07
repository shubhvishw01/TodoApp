import React from "react";

function Pagination({ currentPage, setCurrentPage, todosPerPage, totalTodos }) {
  const totalPages = Math.ceil(totalTodos / todosPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Previous
      </button>

      <div className="page-numbers">
        {pages.map((page) => (
          <button
            className={`page-btn ${currentPage === page ? "active" : ""}`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination-btn"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
