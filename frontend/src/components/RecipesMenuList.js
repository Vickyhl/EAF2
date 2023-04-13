import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "../components/tile.css";

const RecipesMenuList = (props) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userID = userData?._id;
  const [menus, setMenus] = useState([]);
  // let menus;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/menus/fetchRecipesMenus/${userID}`
        );
        // console.log(result.data.result);
        setMenus(result.data.result);
        // menus = result.data.result;
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [menus]);

  const handleMenuSelect = async (index) => {
    console.log(index);
    // window.location.assign(`http://localhost:3000/recipesMenu/${index + 1}`);
  };

  return (
    <React.Fragment>
      <h1>List of recipe-based menus</h1>
      <div className="tile-container">
        {menus &&
          menus.length > 0 &&
          menus.map((menu, i) => (
            <div
              className="tile"
              key={i}
              data-index={i}
              onClick={() => handleMenuSelect(i)}
            >
              <div className="tile-content">
                <h3>Menu number {i + 1}</h3>
                <p>{moment(menu.substring(0, 10)).format("DD/MM/YYYY")}</p>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default RecipesMenuList;
