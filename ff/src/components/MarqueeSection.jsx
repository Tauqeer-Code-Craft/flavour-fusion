import React, { useEffect, useState } from 'react';
import '../App.css'; // Ensure this CSS file is updated

const Marquee = ({ category, backgroundColor, direction }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiKey = '8ba975d8204348528eb0eeec9b5445b4';
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${category}&apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchRecipes();
  }, [category]);

  return (
<section className={`marquee ${direction} ${category === 'Italian' ? 'middle-section' : ''}`} style={{ backgroundColor }}>
      <h2 className="text-center text-lg font-bold p-4" >{category} Recipes</h2>
      <div className="marquee-content">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="marquee-item">
              <img src={recipe.image ? recipe.image : 'https://via.placeholder.com/100x75'} alt={recipe.title} />
              <p className="recipe-title">{recipe.title}</p>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </section>
  );
};

export default Marquee;

