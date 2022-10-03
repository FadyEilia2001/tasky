const express = require("express");
const connectDB = require("./db/connectDB");
const errorHandlerMiddleware = require("./middlewares/errorHandleerMiddleware");
const notFound = require("./middlewares/notFound");
require("dotenv").config();
const shopRouter = require("./routes/tasks");
const cors = require("cors");

//routes

const app = express();
const port = process.env.PORT;

////// middlewares ///////
//json middleware
app.use(express.json());
//to be able to parse the form data
app.use(express.urlencoded({ extended: false }));
//error handler middleware
app.use(errorHandlerMiddleware);

//routes
app.use("/api/v1/tasks", shopRouter);

//cors
app.use(cors({ origin: "*" }));

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
