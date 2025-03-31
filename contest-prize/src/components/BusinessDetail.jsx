// BusinessDetail.jsx
import React, { useState } from 'react';
import ReviewSection from '../components/ReviewSection';
import AddReviewForm from '../components/AddReviewForm';
import { MapPin, Phone, Mail, Globe } from 'react-feather'; // Assuming you use react-feather icons

const BusinessDetail = ({ business, onAddReview, onBack }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const handleAddReview = (review) => {
    onAddReview(business.id, review);
    setShowReviewForm(false);
  };

 
  return (
    <div className="business-detail">
      <button className="back-btn" onClick={onBack}>← Back to listings</button>
      
      <div className="business-header">
        <h1>{business.name}</h1>
        <div className="business-category">{business.category}</div>
      </div>
      
      <div className="business-description">
        <p>{business.description}</p>
      </div>
      
      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li>
            <MapPin size={18} />
            <span>{business.contact.address}</span>
          </li>
          <li>
            <Phone size={18} />
            <span>{business.contact.phone}</span>
          </li>
          <li>
            <Mail size={18} />
            <span>{business.contact.email}</span>
          </li>
          {business.contact.website && (
            <li>
              <Globe size={18} />
              <a href={business.contact.website} target="_blank" rel="noopener noreferrer">
                {business.contact.website}
              </a>
            </li>
          )}
        </ul>
      </div>
      
      <div className="business-hours">
        <h3>Business Hours</h3>
        <table>
          <tbody>
            <tr><td>Monday:</td><td>9:00 AM - 5:00 PM</td></tr>
            <tr><td>Tuesday:</td><td>9:00 AM - 5:00 PM</td></tr>
            <tr><td>Wednesday:</td><td>9:00 AM - 5:00 PM</td></tr>
            <tr><td>Thursday:</td><td>9:00 AM - 5:00 PM</td></tr>
            <tr><td>Friday:</td><td>9:00 AM - 5:00 PM</td></tr>
            <tr><td>Saturday:</td><td>10:00 AM - 2:00 PM</td></tr>
            <tr><td>Sunday:</td><td>Closed</td></tr>
          </tbody>
        </table>
      </div>
      
      <div className="reviews-container">
        <ReviewSection reviews={business.reviews} />
        
        {!showReviewForm ? (
          <button 
            className="add-review-btn"
           onClick={() => setShowReviewForm(true)}
          >
            Write a Review
          </button>
        ) : (
          <AddReviewForm 
            onSubmit={handleAddReview}
            onCancel={() => setShowReviewForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default BusinessDetail;