import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import '../css/detail.css';

const Detail = () => {
  let { id } = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  const imageSrc = location.state?.imageSrc;

  const details = {
    title: "Title",
    text: Array(10).fill("Details"),
    imageSrc: imageSrc,
  };

  // 뒤로가기 함수
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="detail-container">
      <h1>{details.title}</h1>
      <img className="detail-image" src={imageSrc} />
      <div className="detail-info">
        {details.text.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      <button onClick={goBack} className="back-button">Back</button>
    </div>
  );
};

export default Detail;

