const mongoose = require("mongoose");
const tasksModel = require("../models/Tasks");

//get all tasks
const getAllTasks = async (req, res) => {
  try {
    const user = 4;
    const tasks = await tasksModel.find({ userId: 4 });

    res.status(200).json({ msg: "success", tasks: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

// /search?id=xxxxxxxxxxxxxxxxxx
const getSingleTask = async (req, res) => {
  let id = req.query.id;
  console.log(id);
  if (!id) {
    return res.status(500).json({ msg: "no id found" });
  }

  try {
    const task = await tasksModel.find({ _id: id });
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: "no task with this id" });
  }
};

//req.body
const createTask = async (req, res) => {};

//req.body
const updateSingleTask = async (req, res) => {};

//req.params.id
const deleteSingleTask = async (req, res) => {};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateSingleTask,
  deleteSingleTask,
};
