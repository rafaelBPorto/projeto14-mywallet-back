import { registriesSchema } from "../models/registries.models.js";

export async function registriesValidation(req, res, next){
    const registries = req.body;
    const {error} = registriesSchema.validate(registries, {abortEarly: false});

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
}