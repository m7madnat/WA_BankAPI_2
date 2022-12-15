import { Router } from "express";
import { getAccountById,getAllAccounts,updateCredit,depositToAccount,transfer,withdrawFromAccount} from "../controllers/account.controller.js";
import {isAmountValid } from "../middlewares/middlewares.js"

export const accountRouter = Router();



// get all accounts
accountRouter.get("/", getAllAccounts);
accountRouter.get("/:id", getAccountById);
accountRouter.put("/credit/:id", updateCredit);
accountRouter.put("/deposit/:id", depositToAccount);
accountRouter.put("/withdraw/:id", withdrawFromAccount );
accountRouter.put("/transfer/:id", transfer);

