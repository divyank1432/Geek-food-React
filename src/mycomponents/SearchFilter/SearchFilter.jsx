import React from 'react';
import './SearchFilter.css';

function SearchFilter({ onType }) {
  const handleChange = (event) => {
    onType(event.target.value);
  };

  return (
    <div className="search-filter-container">
      <input type="text" placeholder='Search by name' onChange={handleChange} />
    </div>
  );
}

export default SearchFilter;
