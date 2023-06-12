import React, { useState, useEffect } from "react";
import RecipesMenuList from "./RecipesMenuList.js";
import axios from "axios";

const WatchRecipesMenu = () => {
  const [menus, setMenus] = useState([]);
  let userData = localStorage.getItem("user");
  let userID = JSON.parse(userData)._id;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://eatandfit-api.onrender.com/api/menus/fetchRecipesMenus/${userID}`
      );
      setMenus(result.data.identifers);
      //   identifers = result.data.identifers;
    };
    fetchData();
  }, [userID]);

  if (!menus) {
    // If menus is undefined, display a message
    return <h1>No menus available at the moment.</h1>;
  }

  return <RecipesMenuList menus={menus} />;
};

export default WatchRecipesMenu;
