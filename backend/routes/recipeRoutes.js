import { Router } from "express";
import { fetchRecipe } from "../controllers/recipeController.js";

const router = Router();

router.get("/fetchRecipe/:rid", fetchRecipe);

export default router;
