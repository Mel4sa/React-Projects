import './App.css';
import { useState } from 'react';
import SearchHeader from './SearchHeader';
import searchImages from './Api';

function App() {
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (searchTerm) => {
    const results = await searchImages(searchTerm);
    setImages(results);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSearchSubmit} />
      <div className="images-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;