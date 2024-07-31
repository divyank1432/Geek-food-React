import React from 'react';
import './RatingFilter.css';

function RatingFilter({ onChange }) {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="rating-filter-container">
      <label htmlFor="rating">Minimum Rating:</label>
      <input name='rating' type="number" min={0} max={5} onChange={handleChange} />
    </div>
  );
}

export default RatingFilter;
