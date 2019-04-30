const router = require('express').Router();
const jwt = require('jsonwebtoken');
const comment = require('../models/comment');
const author = require('../models/author');


router.get('/allComments', async (req, res) => {
  const delResult = await author.find().forEach(function (x) {
    x.articles.forEach(function (y) {
      y.comments.forEach(function (z) {
       return z.comment;
      })
    })
  })
  res.send({result: delResult});
})

router.post('/deleteComment/:index', async (req, res) => {
  const i = req.params.index;
  const delResult = await comments.update({ "_id": ObjectId(req.params.id) }, { $set: { [`articles.${i}`]: req.body } }).exec();
  res.send({ data: delResult })
})


module.exports = router;
