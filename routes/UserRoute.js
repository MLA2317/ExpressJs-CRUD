import express from "express";
import {create, get, update, deleteUser } from "../controller/UserController.js";

const route = express.Router();

route.get("/get", get)
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route; 