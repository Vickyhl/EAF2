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
      console.log(result.data.result);
      setMenus(result.data.result);
      //   identifers = result.data.identifers;
    };
    fetchData();
  }, []);

  if (menus) {
    console.log(menus);
  }
  return (
    <React.Fragment>
      {menus && menus.length > 0 && <RecipesMenuList menus={menus} />}
      {!menus && <h1>No menus available at the moment.</h1>}
    </React.Fragment>
  );
};

export default WatchRecipesMenu;
