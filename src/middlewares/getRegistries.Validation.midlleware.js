import { sessionsCollection } from "../database/db.js";

export async function getRegistiresValidation(req, res, next) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");

    try {
        const session = await sessionsCollection.findOne({ token });
        if (!session) {
            return res.sendStatus(401);
        }
        req.userId = session.userId;
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

    next()
}