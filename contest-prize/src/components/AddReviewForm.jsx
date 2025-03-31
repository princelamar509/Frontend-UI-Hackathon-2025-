// AddReviewForm.jsx
import React, { useState } from 'react';
import StarRating from './StarRating';

const AddReviewForm = ({ onSubmit, onCancel }) => {
  const [review, setReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value
    });
  };
  
  const handleRatingChange = (rating) => {
    setReview({
      ...review,
      rating
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...review,
      date: new Date().toLocaleDateString()
    });
  };
  
  return (
    <div className="add-review-form">
      <h3>Write a Review</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={review.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Your Rating</label>
          <div className="rating-input">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`star-btn ${star <= review.rating ? 'active' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="comment">Your Review</label>
          <textarea
            id="comment"
            name="comment"
            value={review.comment}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button  type="submit" className="submit-btn">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;