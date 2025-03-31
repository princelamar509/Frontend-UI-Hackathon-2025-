// ReviewSection.jsx - Complete the component that your BusinessCard imports
import React, { useState } from 'react';
import StarRating from './StarRating';

const ReviewSection = ({ reviews }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  // Show only 2 reviews initially, or all if expanded
  const displayedReviews = isExpanded ? reviews : reviews.slice(0, 2);
  
  return (
    <div className="review-section">
      <div className="review-header">
        <h3>Reviews ({reviews.length})</h3>
        <div className="average-rating">
          <StarRating rating={averageRating} />
          <span>{averageRating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="reviews-list">
        {displayedReviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-info">
              <span className="reviewer-name">{review.name}</span>
              <span className="review-date">{review.date}</span>
            </div>
            <StarRating rating={review.rating} />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      
      {reviews.length > 2 && (
        <button 
          className="show-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : `Show All Reviews (${reviews.length})`}
        </button>
      )}
    </div>
  );
};

export default ReviewSection;