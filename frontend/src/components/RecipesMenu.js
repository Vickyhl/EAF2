import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../components/RecipesMenu.css";
import axios from "axios";

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
    <div className="tile-container">
      <div className="tile1">
        <a
          href={`http://localhost:3000/recipe/${menu.recipes[0]._id}`}
          className="tile"
          style={tileStyle}
        >
          <h2>Breakfast</h2>
        </a>
        <p>{menu.recipes[0].title}</p>
      </div>

      <div className="tile2">
        <a href={`http://localhost:3000/watchSnack/${0}`} className="tile">
          <h2>Snack 1</h2>
        </a>
        <p></p>
      </div>

      <div className="tile3">
        <a
          href={`http://localhost:3000/recipe/${menu.recipes[1]._id}`}
          className="tile"
          style={tileStyle2}
        >
          <h2>Lunch</h2>
        </a>
        <p>{menu.recipes[1].title}</p>
      </div>

      <div className="tile4">
        <a href={`http://localhost:3000/watchSnack/${1}`} class="tile">
          <h2>Snack 2</h2>
        </a>
        <p></p>
      </div>

      <div className="tile5">
        <a
          href={`http://localhost:3000/recipe/${menu.recipes[2]._id}`}
          className="tile"
          style={tileStyle3}
        >
          <h2>Dinner</h2>
        </a>
        <p>{menu.recipes[2].title}</p>
      </div>
    </div>
  ) : null;
};

export default RecipesMenu;
