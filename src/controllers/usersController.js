import { v4 as uuidV4 } from "uuid";
import { sessionsCollection } from "../database/db.js";

export async function singIn(req, res) {
    const user= req.userSingIn;
    const token = uuidV4();

    try {     
        await sessionsCollection.insertOne({
            userId: user._id,
            token
        })

        res.send({ token })

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}