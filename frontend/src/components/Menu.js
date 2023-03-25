import React, { useState, useEffect } from "react";
import "./Menu.css";

const Menu = (props) => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:5000/api/menus/${props.menus[index]}`
      );
    };
    setMenu(res.data.menu);
  }, [props]);

  return props.items ? (
    <ul className="menu-list">
      <h1>Your personalized menu</h1>
      {/* <h2>Category: {props.items.category}</h2> */}
      <li className="menu-item">
        <h3>First meal:</h3>
        <div className="menu-item__info">
          {props.items.meal1.map((item) => {
            return <div className="menu-div">{item}</div>;
          })}
        </div>
        <h3>Second meal:</h3>
        <div className="menu-item__info">
          {props.items.meal2.map((item) => {
            return <div className="menu-div">{item}</div>;
          })}
        </div>
        <h3>Third meal:</h3>
        <div className="menu-item__info">
          {props.items.meal3.map((item) => {
            return <div className="menu-div">{item}</div>;
          })}
        </div>
        <h3>Fourth meal:</h3>
        <div className="menu-item__info">
          {props.items.meal4.map((item) => {
            return <div className="menu-div">{item}</div>;
          })}
        </div>
        <h3>Fifth meal:</h3>
        <div className="menu-item__info">
          {props.items.meal5.map((item) => {
            return <div className="menu-div">{item}</div>;
          })}
        </div>
      </li>
    </ul>
  ) : null;
};

export default Menu;
