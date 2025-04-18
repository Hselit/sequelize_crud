import express from "express";
var router = express.Router();

import db from '../models/index.js';
import { Op } from "sequelize";
const {library,book} = db;

//get method
router.get('/get',async(req,res)=>{
   try{
      const data = await library.findAll();
      if(data.length == 0){
         return res.status(200).json({message:"No Library Data Found.."});
      }
      res.status(200).json(data);
   }catch(error){
      console.log(error);
      res.status(500).json({error:"Error Occured "+error});
   }
});

//post method
router.post('/post',async(req,res)=>{
   try{
      const {libraryId,libraryName,staffCount,address} = req.body;

      if(!libraryId || !libraryName || !staffCount || !address){
         return res.status(400).json({message:"All Fields required.."});
      }

      const newlib = await library.create({libraryId,libraryName,staffCount,address});
      res.status(201).json({message:"Library Added Successfully.."})
   }
   catch(error){
      console.log(error);
      res.status(500).json({error:"Error Occured "+error});
   }
});

router.get('/getlibrary',async(req,res)=>{
   try{
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit);
      const offset = (page - 1)* limit;

      const result = await library.findAndCountAll({
         limit,
         offset,
         order:[['libraryId','ASC']],
      });

      if(!result){
         return res.status(200).json({message:"No data Found"});
      }
      res.status(200).json({
         totalRecords:result.count,
         currentPage:page,
         totalPages:Math.ceil(result.count/limit),
         data:result.rows
      });
   }
   catch(error){
      console.log(error);
      res.status(500).json({error:"Error Occured ",error});
   }
})


//filter by libraryName
router.get('/filter',async(req,res)=>{
   try{
     const {name} = req.query;
     console.log(name);
     if(!name){
       return res.status(400).json({message:"Name query parameter is required"});
     }
     const filteredResult = await library.findAll({
       where:{
         libraryName:{
           [Op.like]:`%${name}`
         }
       }
     });
     res.status(200).json({
       total:filteredResult.length,
       data:filteredResult
     });
   }
   catch (error){
     console.log(error);
     res.status(500).json({error:"Error Occured ",error});
   }
 });

 
//get by id
router.get('/:bid',async(req,res) => {
   try{
      const{bid} = req.params;
      const data = await library.findByPk(bid);
      if(!data){
         return res.status(404).json({message:"No library Found"});
      }
      res.status(200).json(data);
   }
   catch(error){
      console.log(error);
      res.status(500).json({message:"Error Occured "+error});
   }
});

//put method
router.put('/:bid',async(req,res)=>{
   try{
      const {bid} = req.params;
      const {libraryId,libraryName,address,staffCount} = req.body;

      if(!libraryName || !address || !staffCount){
         return res.status(404).message({message:"All fields Required"});
      }
      res.status(200).json({message:"Library Data Updated.."});
   }
   catch(error){
      console.log(error);
      res.status(500).json({error:"Error Occured "+error});
   }
});

//delete method
router.delete('/:lid',async(req,res)=>{
   try{
      const { lid} = req.params;
      const data = await library.findByPk(lid);
      if(!data){
         return res.status(404).json({message:"No Library found with the Id"});
      }
      res.status(200).json({message:"Library data deleted "+lid});
   }catch(error){
      console.log(error);
      res.status(500).json({message:"Error Occured "+error});
   }
});

//get all books for library
router.get('/getbooks/:lid',async(req,res)=>{
   try{
      const {lid} = req.params;
      const result = await library.findOne({
         where:{libraryId:lid},
         include:{
            model:book,
            attributes:['bookName']
         }
      });
      if(!result){
         return res.status(404).json({message:"No Books Found in Library "+lid});
      }
      res.status(200).json(result);
   }
   catch(error){
      console.log(error);
      res.status(500).json({message:"Error Occured "+error});
   }
});

export default router;