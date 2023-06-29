import React, { useState } from 'react';
import './search.css';
import Container from '../Container/Container';
import {privateId,privateKey} from '../../keys.js';
function Search() {
  const [cardCount, setCardCount] = useState(0);
  const [recipes, setRecipes] = useState([]);

  function handleSearch(event) {
    event.preventDefault();
    const promptValue = event.target.elements.prompt.value;

    const appId = privateId;
    const appKey = privateKey;

    const url = `https://api.edamam.com/search?q=${promptValue}&app_id=${appId}&app_key=${appKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.hits && data.hits.length > 0) {
          const recipeCount = data.hits.length;
          setCardCount(recipeCount);
          setRecipes(data.hits.map(hit => hit.recipe)); // Store the recipes in the state
        } else {
          console.log('No recipe found.');
          console.log(promptValue);
          setCardCount(0);
          setRecipes([]);
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search for a recipe..."
            name="prompt"
          />
        </div>
      </form>

     <div className="num-recipes"><h2>Number of recipes found: {cardCount}</h2></div>

      <div className="card-container">
        {recipes.map((recipe, index) => (
          <Container key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Search;
