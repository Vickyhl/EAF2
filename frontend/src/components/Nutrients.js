import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Nutrients() {
  const rid = useParams().rid;

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:5000/api/recipes/fetchNutrients/${rid}`
      );
    };
    fetchData();
  }, []);

  return <div></div>;
}

export default Nutrients;
