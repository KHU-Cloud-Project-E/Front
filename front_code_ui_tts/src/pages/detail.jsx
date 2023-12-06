import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../css/detail.css';

const baseUrl = "api"; // API의 기본 URL을 설정

const Detail = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState('');
  const [details, setDetails] = useState({
    title: "Loading...",
    text: [],
  });

  // 이미지와 상세 정보를 불러오는 함수
  const fetchDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/model-details/${id}`);
      if (response.status === 200) {
        setDetails({
          title: response.data.title,
          text: response.data.text,
          imageSrc: response.data.imageSrc,
        });
        setImageSrc(response.data.imageSrc);
      }
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    fetchDetails();
  }, [id]);

  // 뒤로가기 함수
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="detail-container">
      <h1>{details.title}</h1>
      {imageSrc ? <img className="detail-image" src={imageSrc} alt={details.title} /> : <p>Loading image...</p>}
      <div className="detail-info">
        {details.text.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      <button onClick={goBack} className="뒤로가기">Back</button>
    </div>
  );
};

export default Detail;
