import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import usersRouter from "./routes/users.routes.js";
import registriesRouter from "./routes/registries.routes.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(usersRouter);
app.use(registriesRouter);


app.listen(process.env.PORT, () => console.log(`Server in running in port ${process.env.PORT}`))