import React, { useState } from 'react';
import './Restaurant.css';
import restaurants from './Data.js';
import SearchFilter from "../SearchFilter/SearchFilter.jsx";
import RatingFilter from "../RatingFilter/RatingFilter.jsx";
import RestaurantCard from "../RestaurantCard/RestaurantCard.jsx";

function Restaurant() {
  const [searchKey, setSearchKey] = useState('');
  const [rating, setRating] = useState(0);

  const filteredRestaurants = restaurants.filter(res => 
    res.name.toLowerCase().includes(searchKey.toLowerCase()) && res.rating >= rating
  );

  return (
    <div className='main-content'>
      <div className="filters">
        <SearchFilter onType={setSearchKey} />
        <RatingFilter onChange={setRating} />
      </div>
      <div className="restaurants">
        {filteredRestaurants.map((res) => {
          return <RestaurantCard key={res.id} {...res} />;
        })}
      </div>
    </div>
  );
}

export default Restaurant;
