import { User } from "../models/user.model.js";


export const deleteUserFromDB = async (userId) => {
  await User.findByIdAndDelete(userId);
  await Account.updateMany(
    { usersIds: userId },
    { $pull: { usersIds: userId } }
  );
  await Account.deleteMany({ usersIds: { $size: 0 } });
};

export const updateUsersCash = async (accountId, amount) => {
  await User.updateMany(
    { accountIds: accountId },
    { $inc: { totalCash: amount } }
  );
};
