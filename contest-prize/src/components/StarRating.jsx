// StarRating.jsx
import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          className={`star ${star <= Math.round(rating) ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;