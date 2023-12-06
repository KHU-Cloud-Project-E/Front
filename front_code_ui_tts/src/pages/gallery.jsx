import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/gallery.css';

const baseUrl = "api"; // API의 기본 URL을 설정

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // 한 페이지에 로드되는 모델의 개수
  const limit = 9;

  // 모델의 사진을 불러오는 API
  const fetchModelImages = async () => {
    try {
      const response = await axios.get(`${baseUrl}/model-images?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error at model images:', error);
      return [];
    }
  };

  // 모델의 정보를 불러오는 API
  const fetchModelDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/model-details?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error at model details:', error);
      return [];
    }
  };

  const fetchImages = async () => {
    setIsLoading(true);
    const modelImages = await fetchModelImages();
    const modelDetails = await fetchModelDetails();
    // 사진과 정보를 결합하여 새로운 이미지 목록을 생성
    const newImages = modelImages.map((image, index) => ({
      ...image,
      description: modelDetails[index]?.description || 'No description',
    }));
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
