import { Router } from "express";
import CheckAuth from "../middleware/checkAuth.js";
import {
  getMenuById,
  getLastMenu,
  getMenuesByUserId,
  personalizedMenu,
  fetchMenus,
  recipesMenu,
  extractRecipeInfo,
  fetchRecipesMenus,
  fetchRecipeMenuByIndex,
  fetchRecipeById,
  // updateMenu,
  // deleteMenu,
} from "../controllers/menuController.js";

const router = Router();

router.get("/:mid", getMenuById);

// router.get("/user/:uid", getMenuesByUserId);

router.get("/user/:uid", getLastMenu);
router.get("/fetchRecipeById/:rid", fetchRecipeById);
router.get("/fetchRecipeMenuByIndex/:menuNum/:userID", fetchRecipeMenuByIndex);
router.get("/fetchMenus/:uid", fetchMenus);
router.get("/fetchRecipesMenus/:uid", fetchRecipesMenus);

// router.use(CheckAuth);

router.get("/extractRecipeInfo/:createdMenuID", extractRecipeInfo);
router.post("/personalMenu", personalizedMenu);
router.post("/recipesMenu", recipesMenu);

export default router;
