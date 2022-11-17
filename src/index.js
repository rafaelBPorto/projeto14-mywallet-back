import cors from "cors"; 
import dotenv from "dotenv";
import express from "express";
import joi from "joi";
import { MongoClient } from "mongodb";
import { postSingIn } from "./controllers/signInController.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json);

const mongoClient = new MongoClient(process.env.MONGO_URI)

try{
    await mongoClient.connect();
    console.log("MongoDB conectado!")
} catch(err){
    console.log(err)
}

const singInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

const db = mongoClient.db('MyWallet');
const collectionUsers = db.collection('users');
const collectionSession = db.collection('sessions');
const collectionPosting = db.collection('postings');


app.post("/sign-in", postSingIn)

app.listen(process.env.PORT, ()=> `Server in running in port ${process.env.PORT}`)