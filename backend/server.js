const express = require("express");
const connectDB = require("./db/connectDB");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();
require("express-async-errors");
const shopRouter = require("./routes/tasks");
const authRouter = require("./routes/auth");
const cors = require("cors");
const authenticateUsers = require("./middlewares/authentication");

//routes

const app = express();
const port = process.env.PORT || 5000;

////// middlewares ///////
//json middleware
app.use(express.json());
//to be able to parse the form data

//routes
app.use("/api/v1/tasks", authenticateUsers, shopRouter);
app.use("/api/v1/auth", authRouter);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.use(express.urlencoded({ extended: false }));
//error handler middleware

//cors
app.use(cors({ origin: "*" }));

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}!`));
  } catch (error) {
    console.log(error.message);
  }
};

start();
