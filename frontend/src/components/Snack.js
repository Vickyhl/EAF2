import React, { useState, useEffect } from "react";
import axios from "axios";

function Snack() {
  const [snack, setSnack] = useState();

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const res = await axios.get(
          `https://localhost:5000/api/menus/snackGenerator`
        );
        console.log(res.data.snacks);
        setSnack(res.data.snacks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSnacks();
  }, [snack]);
  console.log(snack);
  return <div></div>;
}

export default Snack;
