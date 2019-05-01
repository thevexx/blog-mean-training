const router = require('express').Router();
const user = require('../models/user');

router.get('/byUser/:id', async (req, res) => {
  const userResult = await user.findOne({ "_id": req.params.id }).exec();
  res.send({ data: userResult })
})

module.exports = router;
