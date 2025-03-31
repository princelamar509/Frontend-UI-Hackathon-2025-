const CategoryFilter = ({ categories, selected, onChange }) => (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((cat, idx) => (
        <option key={idx} value={cat}>{cat}</option>
      ))}
    </select>
  );
  
  export default CategoryFilter;
  