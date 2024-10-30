// src/CocktailInput.js
import React, { useState } from 'react';
import cocktailData from './cocktailData';

const CocktailInput = () => {
  const [ingredients, setIngredients] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputIngredients = ingredients.split(' ').map(ingredient => ingredient.trim().toLowerCase());
    
    const matchedCocktails = cocktailData.filter(cocktail => 
      cocktail.ingredients.map(i => i.name.toLowerCase()).some(ingredient => inputIngredients.includes(ingredient))
    );

    setSuggestions(matchedCocktails);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Malzemeleri gir (örneğin: limon şeker)"
          value={ingredients}
          onChange={handleChange}
        />
        <button type="submit">Tarifleri Bul</button>
      </form>
      <div>
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map((cocktail, index) => (
              <li key={index}>
                <strong>{cocktail.name.toUpperCase()}</strong>
                <ul>
                  {cocktail.ingredients.map((ingredient, i) => (
                    <li key={i}> - {ingredient.name}: {ingredient.amount}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CocktailInput;
