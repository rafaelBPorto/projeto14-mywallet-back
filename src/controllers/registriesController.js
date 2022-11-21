import { registriesCollection } from "../database/db.js"

export default async function addRegistries(req, res){
    const {value, description, type, date} = req.body;

    let newValue = value;
    if(type==="outflow"){
        newValue = value*(-1)
    }

    try {
        await registriesCollection.insertOne({
            value: Number(newValue),
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