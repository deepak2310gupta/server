const User = require("../models/userSchema");

exports.updateUser = async ({ userId, updatedUserData }) => {
  return await User.findByIdAndUpdate(
    userId,
    { $set: updatedUserData },
    { new: true }
  );
};

exports.deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

exports.getUser = async (userId) => {
  return await User.findById(userId);
};

exports.getUsersAll = async () => {
  return await User.find({});
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};
