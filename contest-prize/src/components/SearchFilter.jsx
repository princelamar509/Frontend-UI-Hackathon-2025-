// SearchFilter.jsx
import React, { useState, useEffect } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  
  const categories = [
    'All',
    'Restaurant',
    'Retail',
    'Professional Services',
    'Healthcare',
    'Entertainment'
  ];
  
  useEffect(() => {
    // Debounce search to avoid too many updates
    const handler = setTimeout(() => {
      onSearch(searchTerm, category);
    }, 300);
    
    return () => clearTimeout(handler);
  }, [searchTerm, category, onSearch]);
  
  return (
    <div className="search-filter">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search businesses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="category-filter">
        <label htmlFor="category-select">Filter by category:</label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;