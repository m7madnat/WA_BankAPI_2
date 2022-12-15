import { Router } from "express";
import { createUser,deleteUser,getAllUsers,getUserById} from "../controllers/user.controller.js";
import { isUserExist } from "../middlewares/middlewares.js";

export const userRouter = Router();


userRouter.use(["/user", "/delete"], isUserExist);

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/add", createUser);
userRouter.delete("/:id", deleteUser);