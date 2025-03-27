import express from 'express';
var router = express.Router();

import db from '../models/index.js';
console.log(db);
const {library,book} = db;

router.get('/user', async function(req, res, next) {
  console.log("data retrived..")
  const data = await book.findAll({
    include:library
  }); 
  console.log(data)
  res.json(data);
});

export default router;
