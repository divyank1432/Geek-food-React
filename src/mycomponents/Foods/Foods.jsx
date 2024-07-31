import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FoodData} from './FoodData.js';
import styles from './Foods.module.css'; // Import the CSS module

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    try {
      setFoods(FoodData); // Use the imported data
    } catch (err) {
      setError(err);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (foods.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.foodListContainer}>
      <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent: 'center'}}>
        {foods.map(food => (
          <div key={food.recipe_id} className={styles.foodCard}>
            <img src={food.image} alt={food.title} className={styles.foodImage} />
            <h2 className={styles.foodTitle}>{food.title}</h2>
            <p className={styles.foodPublisher}>{food.publisher}</p>
            <Link to={`/food-details/${food.id}`}>
              <button className={styles.viewDetailsButton}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
