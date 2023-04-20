import { Router } from "express";
import { check } from "express-validator";
import {
  getUsers,
  signup,
  login,
  forgotPassword,
  resetPassword,
  updateProfile,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);

router.post(
  "/signup",
  [
    check("firstName").not().isEmpty(),
    check("lastName").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signup
);

router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/updateProfile", updateProfile);
router.put("/resetPassword", resetPassword);

export default router;
