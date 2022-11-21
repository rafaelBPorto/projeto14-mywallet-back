import { Router } from "express";
import { singIn, singUp } from "../controllers/usersController.js";
import { singUpValidation } from "../middlewares/signUpBodyValidation.middleware.js";
import { singInValidation } from "../middlewares/singInBodyValidation.middleware.js";


const router = Router();
router.post("/auth/login",  singInValidation, singIn);
router.post("/auth/sing-up", singUpValidation, singUp)

export default router;