import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const mongoClinte = new MongoClient(process.env.MONGO_URI);
try {
    await mongoClinte.connect();
    console.log("MongoDB conectado com sucesso");
} catch(error){
    console.log(error)
}

const db = mongoClinte.db("MyWallet");
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const registriesCollection = db.collection("registries");