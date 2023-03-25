import { validationResult } from "express-validator";
import mongoose from "mongoose";
import HttpError from "../models/httpError.js";
import Menu from "../models/menuModel.js";
import User from "../models/userModel.js";

import {
  carbsDishes,
  TwoCarbsForLunchDishes,
  ThreeCarbsForLunchDishes,
  sweetCarbs,
  proteinDishes,
  fatsDishes,
  TwofatsDishes,
  sweetFats,
  vegetables,
  OneAndHalfMeatProtein,
  TwoMeatProtein,
  TwoAndHalfMeatProtein,
  sweetBreakfast,
  sweetSnack,
  sourBreakfast,
  sourSnack,
} from "../data/courses.js";

export const getMenuById = async (req, res, next) => {
  const menuId = req.params.mid;
  console.log(menuId);
  let menu;
  try {
    menu = await Menu.findById(menuId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a menu.",
      500
    );
    return next(error);
  }

  if (!menu) {
    const error = new HttpError(
      "Could not find menu for the provided id.",
      404
    );
    return next(error);
  }
  res.status(201).json({ menu: menu });
};

export const getLastMenu = async (req, res, next) => {
  let menu = await Menu.findOne({}, {}, { sort: { _id: -1 } });
  res.json({ menu: menu.toObject({ getters: true }) });
};

export const fetchMenus = async (req, res, next) => {
  const userID = req.params.uid;
  let userWithMenues;

  try {
    userWithMenues = await User.findById(userID).select("menus");
  } catch (err) {
    const error = new HttpError(
      "Fetching menues failed, please try again later.",
      500
    );
    return next(error);
  }
  let result = [];
  let identifers = [];
  for (let i = 0; i < userWithMenues.menus.length; i++) {
    let menu = await Menu.findById(userWithMenues.menus[i]._id);
    identifers[i] = userWithMenues.menus[i]._id;
    result[i] = menu.createdAt;
  }
  console.log(identifers);
  res.status(201).json({ identifers });
};

export const getMenuesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithMenues;
  try {
    userWithMenues = await User.findById(userId).select("menus");
  } catch (err) {
    const error = new HttpError(
      "Fetching menues failed, please try again later.",
      500
    );
    return next(error);
  }

  // if (!places || places.length === 0) {
  // if (!userWithMenues || userWithMenues.menus.length === 0) {
  //   return next(
  //     new HttpError("Could not find menues for the provided user id.", 404)
  //   );
  // }
  let menu = await Menu.findById(userWithMenues.menus[0]);

  res.json({ menu: menu.toObject({ getters: true }) });
};

export const personalizedMenu = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { age, height, weight, gender, purpuse, health, userID } = req.body;
  let BMR = 0;
  let meal1 = [];
  let meal2 = [];
  let meal3 = [];
  let meal4 = [];
  let meal5 = [];

  if (gender === "female") {
    BMR = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  } else {
    BMR = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  }
  if (purpuse === "weightLoss") {
    BMR = BMR - 300;
  }
  console.log(BMR);

  let raffledNumber = Math.random() >= 0.5 ? 1 : 0;
  let randomSweetBreakfast = Math.floor(Math.random() * 108);
  let randomSourBreakfast = Math.floor(Math.random() * 2700);
  let randomSweetSnack = Math.floor(Math.random() * 36);
  let randomSourSnack = Math.floor(Math.random() * 27);

  if (BMR > 1200 && BMR < 1375) {
    // 60, 170, 70
    // carbsDishes = 8;
    // proteinDishes = 4;
    // meatProtein = 1.5;
    // fatDishes = 5;
    if (raffledNumber === 1) {
      meal1 = sweetBreakfast(randomSweetBreakfast);
      meal2 = sourSnack(randomSourSnack);
      meal4 = sweetSnack(randomSweetSnack);
      meal5 = sourBreakfast(randomSourBreakfast);
    } else {
      meal1 = sourBreakfast(randomSourBreakfast);
      meal2 = sweetSnack(randomSweetSnack);
      meal4 = sourSnack(randomSourSnack);
      meal5 = sweetBreakfast(randomSweetBreakfast);
    }
    meal3 = [
      TwoCarbsForLunchDishes[Math.floor(Math.random() * 6)],
      OneAndHalfMeatProtein[Math.floor(Math.random() * 4)],
      vegetables[Math.floor(Math.random() * 10)],
      fatsDishes[Math.floor(Math.random() * 3)],
    ];
  } else if (BMR > 1375 && BMR < 1575) {
    // 18, 87, 70
    console.log("in 138");
    // carbsDishes = 9;
    // proteinDishes = 5;
    // meatProtein = 1.5;
    // fatDishes = 6;
    if (raffledNumber === 1) {
      meal1 = sweetBreakfast(randomSweetBreakfast) + ", " + ["Yogurt cup 1.5%"];
      meal2 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)];
      meal4 = sweetSnack(randomSweetSnack);
      meal5 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)];
    } else {
      meal1 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
      meal2 = sweetSnack(randomSweetSnack);
      meal4 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)];
      meal5 =
        sweetBreakfast(randomSweetBreakfast) +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)];
    }
    meal3 = [
      TwoCarbsForLunchDishes[Math.floor(Math.random() * 6)],
      OneAndHalfMeatProtein[Math.floor(Math.random() * 4)],
      fatsDishes[Math.floor(Math.random() * 3)],
      vegetables[Math.floor(Math.random() * 10)],
    ];
  } else if (BMR > 1575 && BMR < 1825) {
    // 18, 43, 120
    console.log("in 171");

    // carbsDishes = 10;
    // proteinDishes = 6;
    // meatProtein = 2;
    // fatDishes = 7;
    if (raffledNumber === 1) {
      meal1 = sweetBreakfast(randomSweetBreakfast) + ", " + ["Yogurt cup 1.5%"];
      meal2 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)];
      meal4 =
        sweetSnack(randomSweetSnack) +
        ", " +
        sweetCarbs[Math.floor(Math.random() * 3)];
      meal5 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)] +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
    } else {
      meal1 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
      meal2 =
        sweetSnack(randomSweetSnack) +
        ", " +
        sweetCarbs[Math.floor(Math.random() * 3)];
      meal4 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)];
      meal5 =
        sweetBreakfast(randomSweetBreakfast) +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)] +
        ", " +
        ["Yogurt cup 1.5%"];
    }
    meal3 = [
      TwoCarbsForLunchDishes[Math.floor(Math.random() * 6)],
      TwoMeatProtein[Math.floor(Math.random() * 4)],
      vegetables[Math.floor(Math.random() * 10)],
      fatsDishes[Math.floor(Math.random() * 3)],
    ];
  } else if (BMR > 1825 && BMR < 2025) {
    // 60, 200, 120
    console.log("in 1885");
    // carbsDishes = 11;
    // proteinDishes = 7;
    // meatProtein = 2;
    // fatDishes = 8;
    if (raffledNumber === 1) {
      meal1 = sweetBreakfast(randomSweetBreakfast) + ", " + ["Yogurt cup 1.5%"];
      meal2 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)] +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
      meal4 =
        sweetSnack(randomSweetSnack) +
        ", " +
        sweetCarbs[Math.floor(Math.random() * 3)];
      meal5 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)] +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
    } else {
      meal1 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
      meal2 =
        sweetSnack(randomSweetSnack) +
        ", " +
        sweetCarbs[Math.floor(Math.random() * 3)] +
        ", " +
        ["Yogurt cup 1.5%"];
      meal4 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)];
      meal5 =
        sweetBreakfast(randomSweetBreakfast) +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)] +
        ", " +
        ["Yogurt cup 1.5%"];
    }
    meal3 = [
      TwoCarbsForLunchDishes[Math.floor(Math.random() * 6)],
      TwoMeatProtein[Math.floor(Math.random() * 4)],
      vegetables[Math.floor(Math.random() * 10)],
      fatsDishes[Math.floor(Math.random() * 3)],
    ];
  } else {
    // 30, 297, 120
    console.log("in 277");
    // carbsDishes = 12;
    // proteinDishes = 7;
    // meatProtein = 2.5;
    // fatDishes = 9;
    if (raffledNumber === 1) {
      meal1 =
        sweetBreakfast(randomSweetBreakfast) +
        ", " +
        ["Yogurt cup 1.5%"] +
        ", " +
        sweetCarbs[Math.floor(Math.random() * 3)] +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)];
      meal2 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)] +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
      meal4 =
        sweetSnack(randomSweetSnack) +
        ", " +
        sweetCarbs[Math.floor(Math.random() * 3)] +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)];
      meal5 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        fatsDishes[Math.floor(Math.random() * 3)] +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)];
    } else {
      meal1 =
        sourBreakfast(randomSourBreakfast) +
        ", " +
        proteinDishes[Math.floor(Math.random() * 3)] +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)];
      meal2 =
        sweetSnack(randomSweetSnack) +
        ", " +
        sweetCarbs[Math.floor(Math.random() * 3)] +
        ", " +
        ["Yogurt cup 1.5%"];
      meal4 =
        sourSnack(randomSourSnack) +
        ", " +
        carbsDishes[Math.floor(Math.random() * 3)] +
        ", " +
        fatsDishes[Math.floor(Math.random() * 3)];
      meal5 =
        sweetBreakfast(randomSweetBreakfast) +
        ", " +
        sweetFats[Math.floor(Math.random() * 3)] +
        ", " +
        ["Yogurt cup 1.5%"];
    }
    meal3 = [
      ThreeCarbsForLunchDishes[Math.floor(Math.random() * 6)],
      TwoAndHalfMeatProtein[Math.floor(Math.random() * 4)],
      vegetables[Math.floor(Math.random() * 10)],
      TwofatsDishes[Math.floor(Math.random() * 3)],
    ];
  }

  meal1 = meal1.split(",");
  meal2 = meal2.split(",");
  meal4 = meal4.split(",");
  meal5 = meal5.split(",");
  console.log("user id:", userID);
  const createdMenu = new Menu({
    user: req.body.user,
    category: purpuse,
    meal1,
    meal2,
    meal3,
    meal4,
    meal5,
  });

  console.log("user 289:", req.body.user);
  let subjectUser;
  try {
    subjectUser = await User.findById(req.body.user);
  } catch (err) {
    const error = new HttpError("Creating menu failed, please try again", 500);
    return next(error);
  }

  if (!subjectUser) {
    const error = new HttpError("Could not find user for provided id", 404);
    return next(error);
  }

  console.log(createdMenu);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await Menu.collection.insertOne(createdMenu, { session: sess });
    // await createdMenu.save({ session: sess });
    subjectUser.menus.push(createdMenu);
    await subjectUser.save({ session: sess });
    await sess.commitTransaction();
    await sess.endSession();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Creating menu failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ menu: createdMenu });
};

// export const updatePlace = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(
//       new HttpError("Invalid inputs passed, please check your data.", 422)
//     );
//   }

//   const { title, description } = req.body;
//   const placeId = req.params.pid;

//   let place;
//   try {
//     place = await findById(placeId);
//   } catch (err) {
//     const error = new HttpError(
//       "Something went wrong, could not update place.",
//       500
//     );
//     return next(error);
//   }

//   place.title = title;
//   place.description = description;

//   try {
//     await place.save();
//   } catch (err) {
//     const error = new HttpError(
//       "Something went wrong, could not update place.",
//       500
//     );
//     return next(error);
//   }

//   res.status(200).json({ place: place.toObject({ getters: true }) });
// };

// export const deletePlace = async (req, res, next) => {
//   const placeId = req.params.pid;

//   let place;
//   try {
//     place = await findById(placeId).populate("creator");
//   } catch (err) {
//     const error = new HttpError(
//       "Something went wrong, could not delete place.",
//       500
//     );
//     return next(error);
//   }

//   if (!place) {
//     const error = new HttpError("Could not find place for this id.", 404);
//     return next(error);
//   }

//   const imagePath = place.image;

//   try {
//     const sess = await startSession();
//     sess.startTransaction();
//     await place.remove({ session: sess });
//     place.creator.places.pull(place);
//     await place.creator.save({ session: sess });
//     await sess.commitTransaction();
//   } catch (err) {
//     const error = new HttpError(
//       "Something went wrong, could not delete place.",
//       500
//     );
//     return next(error);
//   }

//   unlink(imagePath, (err) => {
//     console.log(err);
//   });

//   res.status(200).json({ message: "Deleted place." });
// };
