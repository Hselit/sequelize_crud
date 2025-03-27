import express from 'express';
var router = express.Router();

//Book Route

import db from '../models/index.js';
// console.log(db);
const {book} = db;

//get method
router.get('/get', async function(req, res, next) {
  try {
    console.log("Get Methods")
    const data = await book.findAll();
    if(data.length == 0){
      return res.status(200).json({message:"No Books Data Found"});
    }
    res.status(200).json(data); 
  }
  catch(error){
    res.status(500).json({error:"Error Occured :"+error})
  }
});

//get by id
router.get('/:bid',async(req,res)=>{
  try{
    const{ bid } = req.params;
    const data = await book.findByPk(bid);
    if(!data){
      return res.status(404).json({message:"No Book Found with the Id"});
    }
    res.status(200).json(data);
  }
  catch(error){
    console.log("Error Occured "+error);
    res.status(500).json({error:"Error Occured "+error});
  }
})

//post method
router.post('/',async(req,res)=>{
  try{
    const{bookId,bookName,genre,price,libraryId} = req.body;
    console.log(req.body);

    if(!bookId || !bookName || !genre || !price || !libraryId){
      return res.status(400).json({message:"All fields required.."});
    }
    const newdt = await book.create({bookId,bookName,genre,price,libraryId});
    res.status(201).json({message:"Book Data Created Successfully.."});
  }
  catch(error){
    console.log("Error Occured "+error);
    res.status(500).json({error:"Error Occured "+error});
  }
});

//put method
router.put('/:bid',async(req,res)=>{
  try{
    const {bid} = req.params;
    const {bookName,genre,price,libraryId} = req.body;

    const existingdata = await book.findByPk(bid);
    if(!existingdata){
      return res.status(404).json({message:"No Book Found with the Id"});
    }
    await existingdata.update({bookName,genre,price,libraryId});
    res.status(200).json({message:"Book Data Updated Successfully.."});
  }
  catch(error){
    console.log("Error Occured "+error);
    res.status(500).json({error:"Error Occured "+error});
  }
});

//delete method
router.delete('/:bid',async(req,res)=>{
  try{
    const{bid} = req.params;
    const data = await book.findByPk(bid);
    if(!data){
      return res.status(404).json({message:"No Book Found with that Id"});
    }
    await data.destroy();
  }
  catch(error){
    console.log("Error Occured "+error);
    res.status(500).json({error:"Error Occured "+error});
  }
});

export default router;
