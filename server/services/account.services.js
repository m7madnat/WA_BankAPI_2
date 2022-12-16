import { Account } from "../models/account.model.js";

export const createAccount = async (cash = 0, credit = 0, usersIds = []) => {
  const newAccount = new Account({ cash, credit, usersIds });
  const savedAccount = await newAccount.save();
  return savedAccount;
};

export const getTotalCash = async (accountIds) => {
  const accounts = await Account.find({ _id: { $in: accountIds } });
  const totalCash = accounts.reduce((acc, account) => {
    return acc + account.cash;
  }, 0);
  return totalCash;
};

export const addUserIdToAccounts = async (userId, accountIds) => {
  await Account.updateMany(
    { _id: { $in: accountIds } },
    { $push: { usersIds: userId } }
  );
};

export const deleteAccounts = async (accountIds) => {
  await Account.deleteMany({ _id: { $in: accountIds } });
};
