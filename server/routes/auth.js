const router = require('express').Router();
const user = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const userResult = await user.create(req.body).catch(err => err);
  res.send({ message: 'ok', data: userResult })
})

module.exports = router;
