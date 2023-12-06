import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/gallery.css';

const baseUrl = import.meta.env.VITE_BACK_BASE_URL

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const limit = 9;

  const fetchImages = async () => {
    setIsLoading(true);
  

    const fetchModels = async (lastId = 0, name = '') => {
      try {
        const response = await axios.get(`${baseUrl}/models`, {
          params: { lastId, name }
        });
        return response.data.result.listUserModelDetailDto;
      } catch (error) {
        console.error('Error at fetching models:', error);
        return [];
      }
    };
  
    try {
      const modelDetails = await fetchModels(page * limit - limit, searchTerm);
  

      const newImages = modelDetails.map((model) => ({
        id: model.model_id,
        src: model.image_url,
        description: model.description || 'No description',
      }));
  
      setImages(prev => [...prev, ...newImages]);
    } catch (error) {
      console.error('Error while fetching images:', error);
    }
  
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
