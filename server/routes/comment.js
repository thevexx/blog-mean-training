const router = require('express').Router();
const jwt = require('jsonwebtoken');
const article= require('../models/comment');

router.post('/deleteComment', async (req, res) => {
  const result = await comment.update({ "_id": ObjectId(req.params.id) }, { $pull: { comments : req.body } });
  res.send({ message: 'ok', data: result })
})

router.get('/comments', async (req, res) => {
  //gets all comments from all articles
})

module.exports = router;
