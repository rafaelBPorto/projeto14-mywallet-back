import { v4 as uuidV4 } from "uuid";
import { sessionsCollection, usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export async function singIn(req, res) {
    const user = req.userSingIn;
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

export async function singUp(req, res) {
    const { name, email, password } = req.body;

    try {
        const hashPassword = bcrypt.hashSync(password, 10);
        await usersCollection.insertOne({ name, email, hashPassword });
        res.sendStatus(201);
    } catch (erro) {
        res.sendStatus(402)
    }
}