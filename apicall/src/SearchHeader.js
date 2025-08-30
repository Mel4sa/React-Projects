import "./SearchHeader.css";
import { useState } from "react";

function SearchHeader({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      search(searchTerm);
      setSearchTerm(""); // inputu temizle
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchHeader;