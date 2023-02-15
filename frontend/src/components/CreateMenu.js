import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const CreateMenu = () => {
  const dispatch = useDispatch();
  // let userData = localStorage.getItem("user");
  const userData = JSON.parse(localStorage.getItem("user"));
  const userID = userData?._id;
  console.log("test", localStorage.getItem("user"));

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
    console.log(formData.age);

    console.log(userID);
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
    <div className="container">
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
          <label htmlFor="health" className="form-check-label">
            Health declaration
          </label>
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
