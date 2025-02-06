import { useState } from "react";
import "./RecipeFinder.css";

const RecipeFinder = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  

  return (
    <div className="recipe-container">
      <h1 className="title">🍽️ Recipe Finder</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={fetchRecipes} className="search-btn">
          Search
        </button>
      </div>

      <div className="recipe-list">
  {recipes.length > 0 ? (
    recipes.map((recipe) => (
      <div key={recipe.idMeal} className="recipe-card">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2>{recipe.strMeal}</h2>
        <p>Category: {recipe.strCategory}</p>
        <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      </div>
    ))
  ) : (
    <p>No recipes found. Try searching for `&quot;`pasta`&quot;` or `&quot;`chicken`&quot;`.</p>
  )}
</div>

    </div>
  );
};

export default RecipeFinder;
