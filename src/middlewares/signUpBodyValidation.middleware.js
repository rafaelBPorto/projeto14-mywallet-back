import { usersCollection } from "../database/db.js";
import { signUpSchema } from "../models/singUp.models.js";

export async function singUpValidation(req, res, next) {
    const user = req.body;
    const { error } = signUpSchema.validate(user, {abortEarly: false});

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    const userExists = await usersCollection.findOne({email: user.email});
    if(userExists){
        return res.status(409).send({message: "Este e-mail já esta cadastrado!"});
    }

    next();
}