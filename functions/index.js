import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { getAllJewelry, addNewJewelry, updateJewelryByID } from "./src/jewelry.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => res.send("It's working!"));

// routs: building CRUD
 
app.post("/jewelry", addNewJewelry); // creat
app.get("/jewelry", getAllJewelry); // read
app.patch("/jewelry", updateJewelryByID); // update
//app.delete("/jewelry", ); // delete


// cloud function 

export const api = onRequest(app);






