import { User } from "../models/user.model.js";
import {
  addUserIdToAccounts,
  createAccount,
  getTotalCash,
} from "../services/account.services.js";

import { deleteUserFromDB } from "../services/user.services.js";

export const createUser = async (req, res) => {
  try {
    const { name, accountIds } = req.body;
    if (accountIds.length === 0) {
      const newAccount = await createAccount();
      accountIds.push(newAccount._id);
    }
    const totalCash = await getTotalCash(accountIds);
    const newUser = new User({ name, accountIds, totalCash });
    addUserIdToAccounts(newUser._id, accountIds);
    await newUser.save();
    res.status(201).send("User has been created successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).send(user);

  } catch (err) {
    res.status(400).send(err.message);
  }
};

//delete user from id
export const deleteUser = async (req, res) => {
  try{
    const id = req.params.id;
    await deleteUserFromDB(id);
    await User.findByIdAndDelete(id);
    res.status(200).send("User has been deleted successfully");
  }
  catch(err){
    res.status(400).send(err.message);
  }
}