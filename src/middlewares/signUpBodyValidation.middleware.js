import { signUpSchema } from "../models/singUp.models.js";

export async function singUpValidation(req, res, next) {
    const user = req.body;
    const { error } = signUpSchema.validate(user, {abortEarly: false});

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }
}