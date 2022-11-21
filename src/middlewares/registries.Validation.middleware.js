import { sessionsCollection } from "../database/db.js";
import { registriesSchema } from "../models/registries.models.js";


export async function registriesValidation(req, res, next){
    const registries = req.body;
    const {authorization} = req.headers;

    const token = authorization?.replace("Bearer ", "");
    try{
        const session = await sessionsCollection.findOne({token});
        if(!session){
            return res.sendStatus(401);
        }
        req.userId = session.userId

    } catch(error){
        console.log(error)
        res.sendStatus(500)
    }


    const {error} = registriesSchema.validate(registries, {abortEarly: false});

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
}