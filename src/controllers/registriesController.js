import { registriesCollection, usersCollection } from "../database/db.js"

export async function addRegistries(req, res) {
    const { value, description, type, date } = req.body;
    const userId = req.userId;

    let newValue = value;
    if (type === "outflow") {
        newValue = value * (-1)
    }

    try {
        await registriesCollection.insertOne({
            userId,
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

export async function getRegistries(req, res) {
    const userId = req.userId;

    try {
        const userRegistres = await registriesCollection.find({ userId }).toArray();
        const userData = await usersCollection.findOne({_id:userId})
        console.log(userData)
        delete userData._id;
        delete userData.hashPassword;


        userRegistres.forEach(element => {
            delete element._id
            delete element.userId
            return element
        });

        const resp = {"user": userData, "registries":userRegistres}
    
        res.send(resp)

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
