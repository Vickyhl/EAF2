import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/RecipesMenu.css";

const RecipesMenu = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userID = userData?._id;
  const [menu, setMenu] = useState();
  const menuNum = useParams().mid;
  const [imgUrl1, setImgUrl1] = useState(null);
  const [imgUrl2, setImgUrl2] = useState(null);
  const [imgUrl3, setImgUrl3] = useState(null);
  let tileStyle;
  let tileStyle2;
  let tileStyle3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/api/menus/fetchRecipeMenuByIndex/${menuNum}/${userID}`
        );
        setMenu(data.data.menu);
        setImgUrl1(menu.recipes[0].imgURL);
        setImgUrl2(menu.recipes[1].imgURL);
        setImgUrl3(menu.recipes[2].imgURL);
      } catch (err) {}
    };
    fetchData();
  }, [menu, imgUrl1, imgUrl2, imgUrl3]);

  if (imgUrl1) {
    tileStyle = {
      backgroundImage: `url(${imgUrl1})`,
    };
  }
  tileStyle2 = {
    backgroundImage: `url(${imgUrl2})`,
  };
  tileStyle3 = {
    backgroundImage: `url(${imgUrl3})`,
  };

  return menu ? (
    <>
      <h1 className="recipesHeader">Recipes menu num. {menuNum}</h1>
      <div className="recipes-tile">
        <a
          href={`http://localhost:3000/recipe/${menu.recipes[0]._id}`}
          className="tileRecipes"
          style={tileStyle}
        >
          <h2>Breakfast</h2>
          <p className="recipesText">{menu.recipes[0].title}</p>
        </a>

        <a
          href={`http://localhost:3000/watchSnack/${0}`}
          className="tileRecipes"
        >
          <h2>Snack 1</h2>
          <p className="recipesText"></p>
        </a>

        <a
          href={`http://localhost:3000/recipe/${menu.recipes[1]._id}`}
          className="tileRecipes"
          style={tileStyle2}
        >
          <h2>Lunch</h2>
          <p className="recipesText">{menu.recipes[1].title}</p>
        </a>

        <a href={`http://localhost:3000/watchSnack/${1}`} class="tileRecipes">
          <h2>Snack 2</h2>
          <p className="recipesText"></p>
        </a>

        <a
          href={`http://localhost:3000/recipe/${menu.recipes[2]._id}`}
          className="tileRecipes"
          style={tileStyle3}
        >
          <h2>Dinner</h2>
          <p className="recipesText">{menu.recipes[2].title}</p>
        </a>
      </div>
    </>
  ) : null;
};

export default RecipesMenu;
