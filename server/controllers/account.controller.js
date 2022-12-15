import { Account } from "../models/account.model.js";
import { updateUsersCash } from "../services/user.services.js";

export const getAllAccounts = async (req, res) => {
  try {
    const allAccounts = await Account.find({});
    res.status(200).send(allAccounts);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAccountById = async (req, res) => {
  try {
    const id = req.params.id;
    const account = await Account.findById(id);
    res.status(200).send(account);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const updateCredit = async (req, res) => {
  try {
    const id = req.params.id;
    const { credit } = req.body;
    await Account.findByIdAndUpdate({ _id: id }, { $inc: { credit: credit } });
    await updateUsersCash(id, credit);
    res.status(200).send("The deposit was made successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const depositToAccount = async (req, res) => {
  try {
    const id = req.params.id;
    const { amount } = req.body;
    await Account.findByIdAndUpdate({ _id: id }, { $inc: { cash: amount } });
    await updateUsersCash(id, amount);
    res.status(200).send("The deposit was made successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const withdrawFromAccount = async (req, res) => {
  try {
    //check if exist
    const id = req.params.id;
    const { amount } = req.body;
    await Account.findByIdAndUpdate({ _id: id }, { $inc: { cash: -amount } });
    await updateUsersCash(id, -amount);
    res.status(200).send("The withdraw was made successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const transfer = async (req, res) => {
  try {
    const id = req.params.id;
    const { amount, to } = req.body;
    await Account.findByIdAndUpdate({ _id: id }, { $inc: { cash: -amount } });
    await Account.findByIdAndUpdate({ _id: to }, { $inc: { cash: amount } });
    await updateUsersCash(id, -amount);
    await updateUsersCash(to, amount);    
    res.status(200).send("The transfer was made successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
