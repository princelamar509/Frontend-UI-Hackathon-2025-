// BusinessList.jsx
import React, { useState } from 'react';
import BusinessCard from './BusinessDetail';
import SearchFilter from './SearchFilter';

const BusinessList = ({ businesses }) => {
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (searchTerm, category) => {
    let results = businesses;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(business => 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (category && category !== 'All') {
      results = results.filter(business => business.category === category);
    }
    
    setFilteredBusinesses(results);
    setSelectedCategory(category || 'All');
  };

  return (
    <div className="business-list">
      <SearchFilter onSearch={handleSearch} />
      
      <div className="category-header">
        <h2>Showing {filteredBusinesses.length} businesses in {selectedCategory}</h2>
      </div>
      
      <div className="business-grid">
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))
        ) : (
          <p className="no-results">No businesses found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default BusinessList;