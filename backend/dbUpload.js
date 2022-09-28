require("dotenv").config();
const mongoose = require("mongoose");
const data = require("./data/todos");
const connectDB = require("./db/connectDB");
const taskModel = require("./models/Tasks");

try {
  connectDB(process.env.MONGO_URI);
  const newData = data.map((task) => {
    taskModel.create({
      id: task.id,
      todo: task.todo,
      completed: task.completed,
      userId: task.userId,
    });
  });
} catch (error) {
  console.log(error.message);
}
