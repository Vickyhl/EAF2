import React from "react";
import "./profile.css";
// firstName,
// lastName,
// email,
// gender,
// age,
// weight,
// height:

function Profile() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const email = userData?.email;
  const gender = userData?.gender;
  const age = userData?.age;
  const weight = userData?.weight;
  const height = userData?.height;

  return (
    <>
      <h1 className="profileHeader">Your profile:</h1>
      <div className="profile">
        <h3 className="profile">First name:</h3>
        <p className="profile">{firstName}</p>
        <h3 className="profile">Last name:</h3>
        <p>{lastName}</p>
        <h3 className="profile">Email:</h3>
        <p>{email}</p>
        <h3 className="profile">Gender:</h3>
        <p>{gender}</p>
        <h3 className="profile">Age:</h3>
        <p>{age}</p>
        <h3 className="profile">Weight:</h3>
        <p>{weight}</p>
        <h3 className="profile">Height:</h3>
        <p>{height}</p>
      </div>
    </>
  );
}

export default Profile;
