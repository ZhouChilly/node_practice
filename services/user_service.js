const User = require('../models/in_memo/user');
const Subscription = require('../models/in_memo/subscription');

module.exports.getAllUsers = () => User.list();

module.exports.addNewUser = (firstName, lastName, age) => User.insert(firstName, lastName, age);

module.exports.getUserById = userId => User.getOneById(userId);

module.exports.createSubscription = (userId, url) => {
  const user = User.getOneById(userId);
  if (!user) throw Error('no such user!');
  const sub = Subscription.insert(userId, url);
  return sub;
};
