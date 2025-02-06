import { useState, useEffect } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch dummy data from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pagination-container">
      <h2>📄 Pagination Demo</h2>
      <ul className="data-list">
        {currentItems.map((item) => (
          <li key={item.id} className="data-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            className={currentPage === number + 1 ? "active" : ""}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
