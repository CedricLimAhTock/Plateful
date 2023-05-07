import React from "react";
import "./container.css";
import Selection from "./Selection.jsx";

const Container = ({ recipe }) => {
  const { label, calories, ingredients, image } = recipe || {}; // Destructure the recipe object

  const numOfIngredients = ingredients ? ingredients.length : 0; // Check if ingredients exist before accessing length

  return (
    <div className="card">
      <div className="img">
        <img className="foodImg" src={image} alt="food" />
      </div>
      <div className="description">
        <h2 className="recipe">{label}</h2>
        <div className="info">
          <p>Calories: {Math.round(calories)} cal</p>
          <p>No of ingredients: {numOfIngredients}</p>
        </div>
        <Selection />
      </div>
    </div>
  );
};

export default Container;
