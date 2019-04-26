const router = require('express').Router();
const user = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  const userResult = await user.findOne({ email: req.body.email }).exec();
  if (!userResult) res.send({ message: 'Wrong email or password' })
  // console.log(userResult.password)
  if (!bcrypt.compareSync(req.body.password, userResult.password)) res.send({ message: 'Wrong email or password' })
  res.send({ message: 'ok', token: jwt.sign({ data: userResult }, ' secret_pass ') })

  router.post('/register', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const userResult = await user.create(req.body).catch(err => err);
    res.send({ message: 'ok', data: userResult })
  })

  module.exports = router;
