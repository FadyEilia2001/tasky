const mongoose = require("mongoose");
const tasksModel = require("../models/Tasks");

//get all tasks
const getAllTasks = async (req, res) => {
  res.json({ msg: "all tasks" });
};

// /search?id=xxxxxxxxxxxxxxxxxx
const getSingleTask = async (req, res) => {
  res.json({ msg: "single task" });
};

//req.body
const createTask = async (req, res) => {
  res.json({msg: 'create task'})
};

//req.body
const updateSingleTask = async (req, res) => {
  res.json({msg: 'Update task'})
};

//req.params.id
const deleteSingleTask = async (req, res) => {
  res.json({msg: 'Delete task'})
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateSingleTask,
  deleteSingleTask,
};
