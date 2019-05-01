const router = require('express').Router();
const article = require('../models/article');
const author = require('../models/author');
const comment = require('../models/comment');

router.post('/articleUpdate/:idArticle/', async (req, res) => {
  const articleResult = await article.update({ "_id": req.params.idArticle }, { $set: { articles: req.body } }).exec();
  res.send({ data: articleResult })
})

router.get('/byAuthor/:id', async (req, res) => {
  const articleResult = await article.findOne({ "author": req.params.id }).populate({ path: 'author', populate: { path: 'user' } }).exec();
  res.send({ data: articleResult })
})

router.get('/articles', async (req, res) => {
  const result = await article.find().populate({ path: 'author', populate: { path: 'user' } }).exec();
  res.send({ data: result })
})

router.post('/addArticle/:idAuthor', async (req, res) => {
  req.body.author = req.params.idAuthor;
  const articleResult = await article.create(req.body).catch(err => err);
  const authorResult = await author.updateOne({ "_id": req.params.idAuthor }, { $push: { articles: articleResult._id } }).exec();
  res.send({ data: authorResult })
})

router.post('/addComment/:idArticle', async (req, res) => {
  const commentResult = await comment.create(req.body).catch(err => err);
  const articleResult2 = await article.updateOne({ "_id": req.params.idArticle }, { $push: { comments: commentResult._id } }).exec();
  res.send({ data: articleResult2 })
})

router.post('/commentUpdate/:idComment/', async (req, res) => {
  const articleResult = await comment.updateOne({ "_id": req.params.idComment }, { $set:  req.body  }).exec();
  res.send({ data: articleResult })
})

router.post('/deleteComment/:idComment/', async (req, res) => {
  const articleResult = await comment.deleteOne({ "_id": req.params.idComment }).exec();
  res.send({ data: articleResult })
})


module.exports = router;
