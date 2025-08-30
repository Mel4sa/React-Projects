import "./SearchHeader.css";

function SearchHeader() {
  return (
    <div className="search-container">
      <form className="search-form">
        <label>Ne Arıyorsunuz?</label>
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
        />
      </form>
    </div>
  );
}

export default SearchHeader;