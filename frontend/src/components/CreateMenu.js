import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../components/modalCSS.css";

const CreateMenu = () => {
  let userData = localStorage.getItem("user");
  let userID = JSON.parse(userData)._id;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [user, setUser] = useState({
    userID: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    purpuse: "",
    health: "",
  });

  const handleSubmitForm = async (formData) => {
    const { age, height, weight, gender, purpuse, health } = formData;

    await axios
      .post("http://localhost:5000/api/menus/personalMenu", {
        age,
        height,
        weight,
        gender,
        purpuse,
        health,
        user: userID,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        window.location.assign(`http://localhost:3000/${userID}/menus`);
      });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.age]: e.target.value,
      [e.target.height]: e.target.value,
      [e.target.weight]: e.target.value,
      [e.target.gender]: e.target.value,
      [e.target.purpuse]: e.target.true,
      [e.target.health]: e.target.true,
    });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="age">Enter your age:</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            required: "This field is required",
            min: { value: 18, message: "The required age is older than 18" },
            max: { value: 65, message: "The required age is younger than 65" },
          })}
          onChange={handleChange}
        />
        {errors?.age?.message && (
          <div className="validationError">{errors?.age?.message}</div>
        )}
        <label htmlFor="height">Enter your height:</label>
        <input
          type="number"
          id="height"
          {...register("height", {
            required: "This field is required",
          })}
          onChange={handleChange}
        />
        {errors?.height?.message && (
          <div className="validationError">{errors?.height?.message}</div>
        )}
        <label htmlFor="weight">Enter your weight:</label>
        <input
          type="number"
          id="weight"
          {...register("weight", {
            required: "This field is required",
            min: { value: 70, message: "The minimum possible weight is 70" },
            max: { value: 120, message: "The maximum possible weight is 120" },
          })}
          onChange={handleChange}
        />
        {errors?.weight?.message && (
          <div className="validationError">{errors?.weight?.message}</div>
        )}
        <label htmlFor="gender">Enter your gender:</label>
        <select {...register("gender", { required: "This field is required" })}>
          <option></option>
          <option value="female">female</option>
          <option value="male">male</option>
          onChange={handleChange}
        </select>
        {errors?.gender?.message && (
          <div className="validationError">{errors?.gender?.message}</div>
        )}
        <label htmlFor="purpuse">Enter your menu purpuse:</label>
        <select
          {...register("purpuse", { required: "This field is required" })}
        >
          <option></option>
          <option value="maintenence">Maintening the existing weight</option>
          <option value="weightLoss">Weight loss</option>
          onChange={handleChange}
        </select>
        {errors?.purpuse?.message && (
          <div className="validationError">{errors?.purpuse?.message}</div>
        )}
        <div className="form-check">
          <input
            type="checkbox"
            name="selectCheckbox"
            id="selectCheckbox"
            {...register("health", { required: "This field is required" })}
            className={`form-check-label ${errors?.health ? "is-invalid" : ""}`}
            onChange={handleChange}
          />
          <a href="/HealthDec" className="form-check-label">
            Health declaration
          </a>
          <div className="validationError">{errors?.health?.message}</div>
        </div>

        <div className="btn-container" onClick={handleSubmit}>
          <button type="submit" className="btn">
            Create the menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMenu;
