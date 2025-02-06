import { useState } from "react";
import "./SearchBar.css";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Grapes",
  "Mango",
  "Orange",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <ul className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="search-item">
              {item}
            </li>
          ))
        ) : (
          <li className="no-results">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
