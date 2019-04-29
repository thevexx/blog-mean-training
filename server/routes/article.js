const router = require('express').Router();
const jwt = require('jsonwebtoken');
const article= require('../models/article');

router.post('/articleUpdate/:id/index', async (req, res) => {
  var i=req.params.index
 const articleResult = await article.update({"_id":ObjectId(req.params.id)},{$set:{[`articles.${i}`]:req.body}});
 res.send({data: articleResult })
})


module.exports = router;
