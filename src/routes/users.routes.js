import { Router } from "express";
import { singIn } from "../controllers/usersController.js";
import { singInValidation } from "../middlewares/singInBodyValidation.middleware.js";


const router = Router();
router.post("/auth/login",  singInValidation, singIn);

export default router;