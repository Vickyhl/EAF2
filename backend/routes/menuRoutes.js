import { Router } from "express";
import CheckAuth from "../middleware/checkAuth.js";
import {
  getMenuById,
  getLastMenu,
  getMenuesByUserId,
  personalizedMenu,
  fetchMenus,
  // updateMenu,
  // deleteMenu,
} from "../controllers/menuController.js";

const router = Router(CheckAuth);

router.get("/:mid", getMenuById);

// router.get("/user/:uid", getMenuesByUserId);

router.get("/user/:uid", getLastMenu);

router.get("/fetchMenus/:uid", fetchMenus);

// router.use(CheckAuth);

router.post("/personalMenu", personalizedMenu);

export default router;
