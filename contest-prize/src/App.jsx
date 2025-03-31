// App.jsx - Main component tying everything together
import React, { useState } from 'react';
import BusinessList from './components/BusinessList';
import BusinessDetail from './components/BusinessDetail';
import AddBusinessForm from './components/AddBusinessForm';
import './App.css';

const App = () => {
  const [businesses, setBusinesses] = useState([
    // Sample data - would normally come from an API
    {
      id: '1',
      name: 'The Green Bistro',
      category: 'Entertainment',
      description: 'A Profesional freelancer Portfolio with years of experience  provides the best services in the community  .',
      contact: {
        phone: '(555) 123-4567',
        email: 'mrmadeus1@gmail.com',
        address: '3737 La Crosse ct, Indianapolis , USA',
        website: 'https://princelamar509.github.io/PORTFOLIO-WEB/'
      },
      reviews: [
        { name: 'John D.', rating: 5, comment: 'Amazing food and atmosphere!', date: '03/15/2025' },
        { name: 'Alice W.', rating: 4, comment: 'Great vegetarian options.', date: '02/28/2025' }
      ]
    },
    
    {
      id: '2',
      name: 'Luna Shop',
      category: 'Retail',
      description: 'A E-commerce shop websites  with great prices differents types of items support  local  .',
      contact: {
        phone: '(555) 123-4567',
        email: 'info@greenbistro.com',
        address: '123 Main St, Anytown, USA',
        website: 'https://princelamar509.github.io/ECOMERCE-3/'
      },
      reviews: [
        { name: 'Roberto Carlos.', rating: 5, comment: 'Amazing food and atmosphere!', date: '03/15/2025' },
        { name: 'Madine Sepht', rating: 4, comment: 'Great vegetarian options.', date: '09/28/2025' }
      ]
    },
    {
      id: '3',
      name: 'Culvers',
      category: 'Restaurant',
      description: 'One of the best fast Food chain in the midwest, From fresh produces to our local farm to your plate with care.',
      contact: {
        phone: '(505) 323-6567',
        email: 'info@culvers.com',
        address: '153 Main St, Greenwood, USA',
        website: 'https://www.culvers.com/'
      },
      reviews: [
        { name: 'Roberto Carlos.', rating: 5, comment: 'Amazing food and atmosphere!', date: '03/15/2025' },
        { name: 'Madine Sepht', rating: 4, comment: 'Great vegetarian options.', date: '10/28/2025' }
      ]
    },
    // More businesses would go here
  ]);
  
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const handleAddBusiness = (newBusiness) => {
    setBusinesses([...businesses, newBusiness]);
    setShowAddForm(false);
  };
  
  const handleAddReview = (businessId, review) => {
    setBusinesses(businesses.map(business => {
      if (business.id === businessId) {
        return {
          ...business,
          reviews: [review, ...business.reviews]
        };
      }
      return business;
    }));
    
    // Update selected business if we're viewing it
    if (selectedBusiness && selectedBusiness.id === businessId) {
      setSelectedBusiness({
        ...selectedBusiness,
        reviews: [review, ...selectedBusiness.reviews]
      });
    }
  };
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Local Business Directory</h1>
        <button 
          className="add-business-btn"
          onClick={() => {
            setShowAddForm(!showAddForm);
            setSelectedBusiness(null);
          }}
        >
          {showAddForm ? 'Cancel' : 'Add Business'}
        </button>
      </header>
      
      <main className="app-content">
        {showAddForm ? (
          <AddBusinessForm onAddBusiness={handleAddBusiness} />
        ) : selectedBusiness ? (
          <BusinessDetail 
            business={selectedBusiness} 
            onAddReview={handleAddReview}
            onBack={() => setSelectedBusiness(null)}
          />
        ) : (
          <BusinessList 
            businesses={businesses}
            onSelectBusiness={setSelectedBusiness}
          />

        )}

           <button 
            className="program-display">
           
          </button>
      </main>
      
      <footer className="app-footer">
        <h4> category **Design a personal blog with categories, posts, and a comments section.** </h4>   
        <p>&copy; 2025 SALVETE .</p>
      </footer>
    </div>
  );
};

export default App;