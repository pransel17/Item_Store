// Backend muna

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();
const app = express();

app.use(express.json()); // allow to accept json data in the req body


// Products route
app.post("/api/products", async (req, res) => {
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



app.delete("/api/products/:id", async (req,res) => {
  const { id } = req.params;

  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product deleted" });
  } catch (error) {
    res.status(404).json({success: false, message: "Product not found" });
  }

});




app.listen(3000, () => {
  connectDB();
  console.log("Server started at http://localhost:3000");
});


// username: lorrainesarayan
//PASSWORD: VQ2d6bC71FsEqJB8