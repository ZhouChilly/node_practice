const express = require('express');
const userRouter = require('./user');
const UserService = require('../services/user_service');
const handleResponse = require('../utils/handle_response');

const router = express.Router();

router.post('/login', (req, res, next) => {
  (async () => {
    const { username, password } = req.body;
    const result = await UserService.loginWithNamePass(username, password);
    return result;
  })()
    .then((resp) => {
      res.data = resp;
      handleResponse(req, res);
    })
    .catch((err) => {
      next(err);
    });
});

router.use('/user', userRouter);

module.exports = router;
