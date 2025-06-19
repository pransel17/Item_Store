import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

const router = express.Router();


// for get method
router.get("/", async (req,res) =>{

  try{
    const products = await Product.find({});
    res.status(200).json({ sucess: true, data: products});
  } catch(error){
    console.log("Error in fetching product: ", error.message);
    res.status(500).json({ sucess: false, message: "Server Error"});
  }
});




// Products route or sending data
router.post("/", async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image){
    return res.status(400).json({ sucess:false, message: "Please provide all fields"});
  }
  const newProduct = new Product(product)
  try{
    await newProduct.save();
    res.status(201).json({sucess: true, data: newProduct});
  } catch(error){
    console.error("Error in Create product: ", error.message)
    res.status(500).json({sucess: false, message: "Server Error"});
  }   
});



// update method
router.put("/:id", async (req,res) =>{
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ sucess: false, message: "Invalid Product Id"});
  }
              
  try{
    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, product, { new: true });
    res.status(200).json({ success: true, data: updatedProduct});
  } catch (error){
    res.status(500).json({ success: false, message: "Server error"});
  }
});


// delete method
router.delete("/:id", async (req,res) => {
  const { id } = req.params;

  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting product: ", error.message);
    res.status(404).json({success: false, message: "Product not found" });
  }
});



export default router;