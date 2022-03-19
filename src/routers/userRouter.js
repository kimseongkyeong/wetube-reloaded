import express from "express";
import { edit, remove,logout,userParam,join } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/logout",logout);
userRouter.get("/join",join);
userRouter.get("/:aa",userParam);


export default userRouter;