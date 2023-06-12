import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import moment from "moment";
import "./css/tile.css";
import axios from "axios";

const MenuList = () => {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  let userData = localStorage.getItem("user");
  let userID = JSON.parse(userData)._id;
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://eatandfit-api.onrender.com/api/menus/fetchMenus/${userID}`
        );
        console.log(result.data.result);

        setMenus(result.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleMenuSelect = async (index) => {
    window.location.assign(`https://eaf-2.vercel.app/menu/${index + 1}`);
  };

  return menus && menus.length > 0 ? (
    <>
      <AccessibilityIcon />
      <div className={`background ${contrast}`}></div>
      <div
        className={`menuList ${fontSize} ${
          readableText ? "readableText" : ""
        } ${
          contrast === "high"
            ? "white"
            : contrast === "low"
            ? "darkgray"
            : "black"
        }`}
      >
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
    </>
  ) : (
    <h1>No menus available at the moment.</h1>
  );
};

export default MenuList;
