import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/Recipe.css";
import axios from "axios";

const Recipe = () => {
  const rid = useParams().rid;
  const [recipe, setRecipe] = useState();
  let title;
  let ul;
  let ingredientsList;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/api/menus/fetchRecipeById/${rid}`
        );
        setRecipe(data.data.recipe);
      } catch (err) {}
    };
    fetchData();
  }, [recipe]);

  if (recipe) {
    title = recipe.title;
    ingredientsList = recipe.ingredients.map((ingredient, index) => {
      return <li key={index}> {ingredient},&nbsp;</li>;
    });
  }

  return recipe ? (
    <ul className="menu-list">
      <h2>{title}</h2>
      <div className="menu-item">
        <p>
          <strong>Prep time: </strong>
          {recipe.prepTime}
          <br />
          <strong>serving: </strong>
          {recipe.serving}
          <br />
        </p>
        <div>
          <strong>ingredients: </strong>
          <li>{ingredientsList}</li>
        </div>
        <br />
        <p>
          <br />
          <strong>
            {" "}
            <br />
            instructions:{" "}
          </strong>
          {recipe.instructions}
        </p>
      </div>
    </ul>
  ) : null;
};

export default Recipe;
