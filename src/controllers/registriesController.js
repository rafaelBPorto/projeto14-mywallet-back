import { registriesCollection } from "../database/db.js"

export default async function addRegistries(req, res){
    const {value, description, type, date} = req.body;

    try {
        await registriesCollection.insertOne({
            value,
            description,
            type,
            date
        })
        res.sendStatus(201)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}