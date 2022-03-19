import express from "express";
import {trending} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);

export default globalRouter;