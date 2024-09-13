import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const API_URL = 'https://tasty.p.rapidapi.com/recipes/list';
const API_KEY = 'ce1da1f2a8msh1fca9cc60422bc7p185fc2jsnb99eea454878';  // Replace with your actual API key

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEY,
          },
          params: {
            from: 0,
            size: 10,
          }
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
