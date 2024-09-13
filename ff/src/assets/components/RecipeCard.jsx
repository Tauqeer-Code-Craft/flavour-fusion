import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="recipe-card">
        <img src={recipe.thumbnail_url} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <p><strong>Prep Time:</strong> {recipe.total_time_minutes || 'N/A'} minutes</p>
        <p><strong>Servings:</strong> {recipe.num_servings || 'N/A'}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
