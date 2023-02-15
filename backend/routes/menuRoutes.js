import { Router } from "express";
import { check } from "express-validator";
import {
  getMenuById,
  getMenuesByUserId,
  personalizedMenu,
  // updatePlace,
  // deletePlace,
} from "../controllers/menuController.js";

const router = Router();

router.get("/:mid", getMenuById);

router.get("/user/:uid", getMenuesByUserId);

router.post("/personalMenu", personalizedMenu);

export default router;
