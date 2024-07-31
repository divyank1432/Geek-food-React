// mycomponents/FoodDetails/FoodDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Food.module.css';
import { FoodData } from '../FoodData.js'; // Adjust the path to your FoodData file

function FoodDetails() {
  const { id } = useParams();
  const food = FoodData.find(food => food.id === id);

  if (!food) {
    return <div className={style.notFound}>Food not found</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src={food.image} alt={food.title} className={style.foodImage} />
        <div className={style.cardContent}>
          <h1 className={style.foodTitle}>{food.title}</h1>
          <p className={style.foodPublisher}><strong>Publisher:</strong> {food.publisher}</p>
          <p className={style.foodHealth}><strong>Health Info:</strong> {food.health}</p>
          <h3>Ingredients:</h3>
          <ul className={style.ingredientsList}>
            {food.ingredients.map((ingredient, index) => (
              <li key={index} className={style.ingredientItem}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
