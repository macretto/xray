import React, { useState } from "react";
import "./Pagination.css"; // Import CSS file for styling

const Pagination = ({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  const handleFirstPage = () => {
    handleClick(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handleClick(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    handleClick(totalPages);
  };

  return (
    <div className="pagination">
      <button onClick={handleFirstPage}>First</button>
      <button onClick={handlePreviousPage}>Previous</button>
      <ul>{renderPageNumbers()}</ul>
      <button onClick={handleNextPage}>Next</button>
      <button onClick={handleLastPage}>Last</button>
    </div>
  );
};

export default Pagination;
