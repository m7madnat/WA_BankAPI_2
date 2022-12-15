import { Router } from "express";
import { userRouter } from "./user.routes.js";
import { accountRouter } from "./account.routes.js";



export const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/accounts", accountRouter);

