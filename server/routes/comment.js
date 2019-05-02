const router = require('express').Router();
const jwt = require('jsonwebtoken');
const comment = require('../models/comment');
const author = require('../models/author');
const article = require('../models/article');


router.get('/allComments', async (req, res) => {
  const delResult = await author.find().forEach(function (x) {
    x.articles.forEach(function (y) {
      y.comments.forEach(function (z) {
        return z.comment;
      })
    })
  })
  res.send({ result: delResult });
})

router.get('/deleteComment/:id', async (req, res) => {
  const articleResult = await article.findOne({ comments: req.params.id }).exec()
  const articleUpdateResult = await article.updateOne({ _id: articleResult._id },
    { $pull: { comments: req.params.id } }).exec()
  const commentResult = await comment.deleteOne({ _id: req.params.id }).exec()
  // const delResult = await comments.update({ "_id": ObjectId(req.params.id) }, { $set: { [`articles.${i}`]: req.body } }).exec();
  res.send({ data: commentResult })
})

module.exports = router;
