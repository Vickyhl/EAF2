import React, { useState, useEffect } from "react";
import moment from "moment";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import "../components/tile.css";
import axios from "axios";

const MenuList = (props) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const [menu, setMenu] = useState();
  // let menu;

  const handleMenuSelect = async (index) => {
    const res = await axios.get(
      `http://localhost:5000/api/menus/${props.menus[index]}`
    );
    setMenu(res.data.menu);

    setSelectedMenuIndex(index);
  };

  return (
    <React.Fragment>
      {menu && <Menu items={menu} />}

      {props.menus.map((menu, i) => (
        <div
          className="tile"
          key={i}
          data-index={i}
          onClick={() => handleMenuSelect(i)}
        >
          {/* <Link to={`/menu/${props.menus[i]}`}> */}{" "}
          <div className="tile-content">
            <h3>Menu number {i + 1}</h3>
            {/* <p>{moment(menu.substring(0, 10)).format("DD/MM/YYYY")}</p> */}
          </div>
          {/* </Link> */}
        </div>
      ))}
    </React.Fragment>
  );
};

export default MenuList;
