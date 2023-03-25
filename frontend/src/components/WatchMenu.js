import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./MenuList";

const WatchMenu = () => {
  const [menus, setMenus] = useState([]);
  let userData = localStorage.getItem("user");
  let userID = JSON.parse(userData)._id;
  let identifers;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/menus/fetchMenus/${userID}`
      );
      setMenus(result.data.identifers);
      //   identifers = result.data.identifers;
    };
    fetchData();
  }, [userID]);

  return <MenuList menus={menus} />;
};

export default WatchMenu;
