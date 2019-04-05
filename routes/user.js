const express = require('express');
const UserService = require('../services/user_service');
const handleResponse = require('../utils/handle_response');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  (async () => {
    const users = await UserService.getAllUsers();
    return { users };
  })().then((resp) => {
    res.data = resp;
    handleResponse(req, res);
  }).catch((err) => {
    next(err);
  });
});

/* Add a new user */
router.post('/', (req, res, next) => {
  (async () => {
    const { firstName, lastName, age } = req.body;
    const user = await UserService.addNewUser(firstName, lastName, age);
    return { user };
  })().then((resp) => {
    res.data = resp;
    handleResponse(req, res);
  }).catch((err) => {
    next(err);
  });
});

/* Get user by id */
router.get('/:userId', (req, res, next) => {
  (async () => {
    const { userId } = req.params;
    const user = UserService.getUserById(userId);
    return { user };
  })().then((resp) => {
    res.data = resp;
    handleResponse(req, res);
  }).catch((err) => {
    next(err);
  });
});

/* Add a subscription */
router.post('/:userId/subscription', (req, res, next) => {
  (async () => {
    const { userId } = req.params;
    const { url } = req.body;
    const sub = UserService.createSubscription(userId, url);
    return { sub };
  })().then((resp) => {
    res.data = resp;
    handleResponse(req, res);
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
