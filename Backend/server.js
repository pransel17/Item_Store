// Backend muna

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve()

app.use(express.json()); // allow to accept json data in the req body

app.use("/api/products/", productRoutes);

// FOR DEPLOYMENT GRRR!!
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/Frontend/dist/"))); // used to serve frontend files (like a React app) from  Express backend, but only in production.
  app.get("*", (req,res)=> { // slayeddd unknown route (*) should return index.html so React Router can handle it
    res.sendFile(path.resolve(__dirname, "Frontend", "dist" , "index.html"));
  })
}


app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});


