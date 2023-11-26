import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/gallery.css';

// 무한 스크로 구현하느라 이렇게 적었는데 여기에 삭제할거 삭제하고 필요한 json넣으시면 돼요..!
const testJson = {
  "status": 200,
  "message": "success",
  "count": 30,  
  "components": Array(30).fill(null).map((_, index) => ({
    id: index + 1,
    src: `img/person${index % 3 + 1}.png`
  }))
};

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // 각 페이지에서 로드할 아이템 수
  const limit = 9;

  const fetchImages = () => {
    setIsLoading(true);
    const startIndex = (page - 1) * limit;
    const newImages = testJson.components.slice(startIndex, startIndex + limit);
    setImages(prev => [...prev, ...newImages]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

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
            <img src={component.src} alt={`Image ${component.id}`} className="model-image" />
            <div className="description">{component.description}</div>
          </div>
        ))}
      </div>
      {isLoading && <div className="loading">Loading more items...</div>}
    </div>
  );
}

export default Gallery;
