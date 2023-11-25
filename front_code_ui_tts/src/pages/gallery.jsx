import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/gallery.css';

const testJson = {
  "status": 200,
  "message": "success",
  "count": 9,
  "components": [
    {
      "id" : 1,
      "src": 'img/person1.png',
    },
    {
      "id" : 2,
      "src": 'img/person2.png', 
    },
    {
      "id" : 3,
      "src": 'img/person3.png', 
    },
    {
      "id" : 4,
      "src": 'img/person1.png', 
    },
    {
      "id" : 5,
      "src": 'img/person2.png', 
    },
    {
      "id" : 6,
      "src": 'img/person3.png', 
    },
    {
      "id" : 7,
      "src": 'img/person1.png', 
    },
    {
      "id" : 8,
      "src": 'img/person2.png', 
    },
    {
      "id" : 9,
      "src": 'img/person3.png', 
    }
  ]
};

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState(testJson.components);
  let navigate = useNavigate();

  const handleImageClick = (component) => {
    navigate(`/detail/${component.id}`, { state: { imageSrc: component.src } });
  };

  return (
    <div className="gallery-container">
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="image-grid">
        {images.map((component) => (
          <div key={component.id} className="image-card" onClick={() => handleImageClick(component)}>
            <img src={component.src} alt={component.alt} className="model-image" />
            <div className="description">{component.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;