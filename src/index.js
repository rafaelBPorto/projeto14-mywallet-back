import express from "express";
import cors from "cors"; 
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

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

app.listen(process.env.PORT, ()=> `Server in running in port ${process.env.PORT}`)