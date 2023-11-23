import React, { useState } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import '../css/gallery.css';

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');

  const [images, setImages] = useState([
  ]);

  return (
    <div className="gallery">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="image-grid">
        {images.map((image) => (
          <Link key={image.id} to={`/gallery/detail/${image.id}`}>
            <div className="image-item">
              <img src={image.src} alt={image.alt} />
            </div>
          </Link>
        ))}
      </div>

      <Routes>
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

function DetailPage() {
  const { id } = useParams();

  return <div className="detail-page">Detail page for item {id}</div>;
}

export default Gallery;
