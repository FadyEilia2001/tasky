const express = require("express");
const connectDB = require("./db/connectDB");
const errorHandlerMiddleware = require("./middlewares/errorHandleerMiddleware");
const notFound = require("./middlewares/notFound");
require("dotenv").config();

//routes

const app = express();
const port = process.env.PORT;

////// middlewares ///////
//json middleware
app.use(express.json());
//error handler middleware
app.use(errorHandlerMiddleware);

//routes
app.get("/", (req, res) => res.send("Hello World!"));

//not found middleware
app.use(notFound);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}!`));
  } catch (error) {
    console.log(error.message);
  }
};

start();
