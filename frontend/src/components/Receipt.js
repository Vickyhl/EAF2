import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import "../components/receipt.css";

function Receipt() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;
  const email = userData?.email;
  const type = useParams().type;

  const handleReceipt = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      `http://localhost:5000/api/order/receipt/${email}`
    );
    if (type === "regular") {
      window.location.assign(`http://localhost:3000/${userId}/menus`);
    } else {
      window.location.assign(`http://localhost:3000/recipesMenu/${type}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "regular") {
      window.location.assign(`http://localhost:3000/${userId}/menus`);
    } else {
      window.location.assign(`http://localhost:3000/recipesMenu/${type}`);
    }
  };

  return (
    <div>
      <h1>Thanks for the purchase!</h1>
      <h2>Need a receipt?</h2>
      <div className="btn-container" onClick={handleReceipt}>
        <button type="submit" className="btn">
          Yes please{" "}
        </button>
      </div>
      <div className="btn-container" onClick={handleSubmit}>
        <button type="submit" className="btn">
          No, take me to the menu{" "}
        </button>
      </div>
    </div>
  );
}

export default Receipt;
