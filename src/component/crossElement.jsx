import React from 'react';

function CrossElement() {
  return (
    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="0" width="12" height="60" fill="gray" />
      <rect x="0" y="24" width="60" height="12" fill="gray" />
    </svg>
  );
}

export default CrossElement;