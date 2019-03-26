const User = require('../models/mongoose/user');
const Subscription = require('../models/mongoose/subscription');

const getAllUsers = async () => {
  const list = await User.list();
  return list;
};

const addNewUser = async (name, age) => {
  const user = await User.insert({ name, age });
  return user;
};

const getUserById = async (userId) => {
  const user = await User.getOneById(userId);
  return user;
};

const createSubscription = async (userId, url) => {
  const user = User.getOneById(userId);
  if (!user) throw Error('no such user!');
  const sub = Subscription.insert({ userId, url });
  return sub;
};

module.exports = {
  getAllUsers,
  addNewUser,
  getUserById,
  createSubscription,
};
