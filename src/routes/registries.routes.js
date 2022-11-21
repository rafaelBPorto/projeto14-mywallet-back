import { Router } from "express";
import {addRegistries, getRegistries} from "../controllers/registriesController.js";
import { getRegistiresValidation } from "../middlewares/getRegistries.Validation.midlleware.js";
import { registriesValidation } from "../middlewares/registries.Validation.middleware.js";

const router = Router();
router.post("/registries", registriesValidation, addRegistries);
router.get("/registries", getRegistiresValidation, getRegistries)

export default router;