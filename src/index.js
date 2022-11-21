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

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server in running in port ${port}`))