import React, { useState, useEffect } from "react";
import moment from "moment";
import "../components/tile.css";
import axios from "axios";

const MenuList = (props) => {
  let userData = localStorage.getItem("user");
  let userID = JSON.parse(userData)._id;
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/menus/fetchMenus/${userID}`
        );
        setMenus(result.data.identifers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userID]);

  const handleMenuSelect = async (index) => {
    window.location.assign(`http://localhost:3000/menu/${menus[index]}`);
  };

  return (
    <React.Fragment>
      {/* {menu && <Menu items={identifers[selectedMenuIndex]} />} */}
      {props.menus.map((menu, i) => (
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
    </React.Fragment>
  );
};

export default MenuList;
