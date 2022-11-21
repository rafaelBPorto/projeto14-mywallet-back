import { Router } from "express";
import addRegistries from "../controllers/registriesController.js";
import { registriesValidation } from "../middlewares/registries.Validatiom.middleware.js";

const router = Router();
router.post("/registries", registriesValidation, addRegistries);

export default router;