// Backend muna

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

app.use(express.json()); // allow to accept json data in the req body

app.use("api/proucts", productRoutes);


app.listen(3000, () => {
  connectDB();
  console.log("Server started at http://localhost:3000");
});


// username: lorrainesarayan
//PASSWORD: VQ2d6bC71FsEqJB8