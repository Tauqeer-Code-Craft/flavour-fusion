import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://tasty.p.rapidapi.com/recipes/get-more-info';
const API_KEY = 'ce1da1f2a8msh1fca9cc60422bc7p185fc2jsnb99eea454878';  // Replace with your actual API key

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEY,
          },
          params: {
            id: id,
          }
        });
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return <div>Loading recipe details...</div>;
  }

  if (!recipe) {
    return <div>No recipe details available.</div>;
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <img src={recipe.thumbnail_url} alt={recipe.name} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.sections[0].components.map((ingredient, index) => (
          <li key={index}>{ingredient.raw_text}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step.display_text}</li>
        ))}
      </ol>
      <h3>Nutritional Information</h3>
      <p><strong>Protein:</strong> {recipe.nutrition.protein} g</p>
      <p><strong>Carbohydrates:</strong> {recipe.nutrition.carbohydrates} g</p>
      <p><strong>Fat:</strong> {recipe.nutrition.fat} g</p>
      <p><strong>Calories:</strong> {recipe.nutrition.calories} kcal</p>
    </div>
  );
}

export default RecipeDetail;
