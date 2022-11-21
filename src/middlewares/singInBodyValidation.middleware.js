import bcrypt from "bcrypt";
import { usersCollection } from "../database/db.js";
import { singInSchema } from "../models/singIn.models.js";

export async function singInValidation(req, res, next) {
    
    const user = req.body;
    const { error } = singInSchema.validate(user, { abortEarly: false });
    
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    try {

        const userExists = await usersCollection.findOne({ email: user.email });
        if (!userExists) {
            return res.sendStatus(401)
        }

        if (!bcrypt.compare(user.password, userExists.hashPassword)) {
            return res.sendStatus(401)
        }

        req.userSingIn = userExists;
        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    
}