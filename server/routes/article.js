const router = require('express').Router();
const article = require('../models/article');
const author = require('../models/author');

router.post('/articleUpdate/:id/index', async (req, res) => {
  var i = req.params.index
  const articleResult = await article.update({ "_id": ObjectId(req.params.id) }, { $set: { [`articles.${i}`]: req.body } }).exec();
  res.send({ data: articleResult })
})

router.get('/byAuthor/:id', async (req, res) => {
  const articleResult = await article.findOne({ "author": req.params.id }).populate({ path: 'author', populate: { path: 'user' } }).exec();
  res.send({ data: articleResult })
})

router.post('/addArticle/:idAuthor', async (req, res) => {
  const articleResult = await article.create(req.body).catch(err => err);
  const authorResult = await author.update({ "_id": ObjectId(req.params.idAuthor) }, { $push: { articles: articleResult._id } }).exec();
  res.send({ data: articleResult })
})

router.post('/addComment/:idArticle', async (req, res) => {
  const articleResult = await article.update({ "_id": ObjectId(req.params.idArticle) }, { $push: { comments: articleResult._id } }).exec();
  res.send({ data: articleResult })
})



module.exports = router;
