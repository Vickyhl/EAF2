import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/Menu.css";

const Menu = (props) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userID = userData?._id;
  const menuNum = useParams().mid;
  const [menu, setMenu] = useState();
  const mid = JSON.stringify(useParams());

  console.log(props.items);
  useEffect(() => {
    const fetchData = async () => {
      if (menuNum === undefined) {
        setMenu(props.items);
      } else {
        try {
          const data = await axios.get(
            `http://localhost:5000/api/menus/fetchMenuByIndex/${menuNum}/${userID}`
          );
          setMenu(data.data.menu);
        } catch (err) {}
      }
    };
    fetchData();
  }, [mid]);

  console.log(menu);

  return menu ? (
    <div className="menu">
      <h1 className="menu">Your personalized menu</h1>
      <h2 className="menu">Category: {menu.category}</h2>
      <ul className="reg-menu-list">
        <li className="menu-item">
          <h3 className="menu">First meal:</h3>
          <div className="menu-item__info">
            {menu.meal1.map((item) => {
              return <div className="menu-div">{item}</div>;
            })}
          </div>
          <h3 className="menu">Second meal:</h3>
          <div className="menu-item__info">
            {menu.meal2.map((item) => {
              return <div className="menu-div">{item}</div>;
            })}
          </div>
          <h3 className="menu">Third meal:</h3>
          <div className="menu-item__info">
            {menu.meal3.map((item) => {
              return <div className="menu-div">{item}</div>;
            })}
          </div>
          <h3 className="menu">Fourth meal:</h3>
          <div className="menu-item__info">
            {menu.meal4.map((item) => {
              return <div className="menu-div">{item}</div>;
            })}
          </div>
          <h3 className="menu">Fifth meal:</h3>
          <div className="menu-item__info">
            {menu.meal5.map((item) => {
              return <div className="menu-div">{item}</div>;
            })}
          </div>
        </li>
      </ul>
    </div>
  ) : null;
};

export default Menu;
