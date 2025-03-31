import { useState } from "react";
import { businesses } from "../data/businesses";
import BusinessCard from "../components/BusinessCard";
import CategoryFilter from "../components/CategoryFilter";

const Directory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const uniqueCategories = [...new Set(businesses.map(b => b.category))];
  const filtered = selectedCategory
    ? businesses.filter(b => b.category === selectedCategory)
    : businesses;

  return (
    <div className="directory">
      <h1>Business Directory</h1>
      <CategoryFilter
        categories={uniqueCategories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      <div className="business-list">
        {filtered.map(b => (
          <BusinessCard key={b.id} business={b} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
