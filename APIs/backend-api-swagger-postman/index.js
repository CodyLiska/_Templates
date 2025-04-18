import express from "express";
import mongoose from "mongoose";
import dotnev from "dotenv";
import productRoute from "./routes/product.route.js"
import { PORT, MONGOCONNECTION } from "./config.js"

const app = express();
dotnev.config();

// MIDDLEWARE
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/products", productRoute);

// Database connection
mongoose
  .connect(MONGOCONNECTION)
  .then(() => {
    console.log("Connected to the Database!");
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection FAILED!");
  });

// THIS IS WHERE YOU WANT TO DISPLAY THE UI
app.get("/", function (req, res) {
  res.send("Hello Cody from Node API Server");
});