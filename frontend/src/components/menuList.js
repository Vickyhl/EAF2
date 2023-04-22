import React, { useState, useEffect } from "react";
import moment from "moment";
import "./css/tile.css";
import axios from "axios";

const MenuList = () => {
  let userData = localStorage.getItem("user");
  let userID = JSON.parse(userData)._id;
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/menus/fetchMenus/${userID}`
        );
        console.log(result.data.result);

        setMenus(result.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [menus]);

  const handleMenuSelect = async (index) => {
    window.location.assign(`http://localhost:3000/menu/${index + 1}`);
  };

  return menus ? (
    <div className="menuList">
      <h1 className="regularList">List of custom regular menus</h1>
      <div className="tile-container">
        {menus.map((menu, i) => (
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
    </div>
  ) : null;
};

export default MenuList;
