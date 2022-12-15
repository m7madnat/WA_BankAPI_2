import mongoose from "mongoose";
import { Account } from "../models/account.model.js";
import { User } from "../models/user.model.js";

export const isAmountValid = async (req, res, next) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).send("Amount is missing");
  }
  if (typeof amount !== "number") {
    return res.status(400).send("Amount must be a number");
  }
  if (amount < 0) {
    return res.status(400).send("Amount must be positive");
  }
  if (amount > req.account.cash + req.account.credit) {
    return res.status(400).send("Amount is bigger than the account balance");
  }
  next();
};

export const isAccountExist = async (req, res, next) => {
  const { accountId } = req.body;
  if (!accountId) {
    return res.status(400).send("Account ID is missing");
  }
  if (!mongoose.Types.ObjectId.isValid(accountId)) {
    return res.status(400).send("Account ID is not valid");
  }
  const account = await Account.findById({ _id: accountId });
  if (!account) {
    return res.status(400).send("This account does not exist");
  }
  req.account = account;
  next();
};

export const isUserExist = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).send("User ID is missing");
  }
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).send("User ID is not valid");
  }
  const user = await User.findById({ _id: userId });
  if (!user) {
    return res.status(400).send("This user does not exist");
  }
  next();
};
