// AddBusinessForm.jsx
import React, { useState } from 'react';

const AddBusinessForm = ({ onAddBusiness }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    contact: {
      phone: '',
      email: '',
      address: '',
      website: ''
    }
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      // Handle nested properties (for contact)
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBusiness({
      ...formData,
      id: Date.now().toString(),
      reviews: []
    });
    
    // Reset form
    setFormData({
      name: '',
      category: '',
      description: '',
      contact: {
        phone: '',
        email: '',
        address: '',
        website: ''
      }
    });
  };
  
  return (
    <div className="add-business-form">
      <h2>Add a New Business</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Business Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Retail">Retail</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="contact.phone">Phone</label>
          <input
            type="tel"
            id="contact.phone"
            name="contact.phone"
            value={formData.contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contact.email">Email</label>
          <input
            type="email"
            id="contact.email"
            name="contact.email"
            value={formData.contact.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contact.address">Address</label>
          <input
            type="text"
            id="contact.address"
            name="contact.address"
            value={formData.contact.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contact.website">Website</label>
          <input
            type="url"
            id="contact.website"
            name="contact.website"
            value={formData.contact.website}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="submit-btn">Add Business</button>
      </form>
    </div>
  );
};

export default AddBusinessForm;