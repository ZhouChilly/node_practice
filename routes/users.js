const express = require('express');
const UserService = require('../services/user_service');

const router = express.Router();

/* GET users listing. */
router.get('/', (_, res) => {
  res.locals.users = UserService.getAllUsers();
  res.render('users');
});

/* Add a new user */
router.post('/', (req, res) => {
  const { firstName, lastName, age } = req.body;
  const user = UserService.addNewUser(firstName, lastName, age);
  res.json(user);
});

/* Get user by id */
router.post('/:userId', (req, res) => {
  const { userId } = req.params;
  res.locals.user = UserService.getUserById(userId);
  res.render('user');
});

/* Add a subscription */
router.post('/:userId/subscription', (req, res, next) => {
  const { userId } = req.params;
  const { url } = req.body;
  try {
    const sub = UserService.createSubscription(userId, url);
    res.json(sub);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
