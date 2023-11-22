const users = require("../services/users");

exports.createUser = async (req, res) => {
  try {
    const savedUser = await users.createUser(req.body);
    return res.status(200).json(savedUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUserData = req.body;
    const userId = req.params.id;
    const updatedUser = await users.updateUser({ userId, updatedUserData });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await users.getUser(userId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const list = await users.getUsersAll();
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
