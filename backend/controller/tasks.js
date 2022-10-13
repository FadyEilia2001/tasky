const mongoose = require("mongoose");
const Task = require("../models/Tasks");
const StatusCodes = require("http-status-Codes");
const { NotFoundError, BadRequestError } = require("../errors");

//get all tasks
const getAllTasks = async (req, res) => {
  const task = await Task.find({ createdBy: req.user.userId });

  res.status(StatusCodes.OK).json({ tasks: task, count: task.length });
};

const getSingleTask = async (req, res) => {
  const task = await Task.find({
    _id: req.params.id,
    createdBy: req.user.userId,
  });

  if (task.length < 1) {
    throw new NotFoundError("Can't find a task with this search criteria");
  }
  res.status(StatusCodes.OK).json(task);
};

const createTask = async (req, res) => {
  const task = await Task.create({
    todo: req.body.todo,
    createdBy: req.user.userId,
  });

  res.status(StatusCodes.CREATED).json({ task });
};

const updateSingleTask = async (req, res) => {
  const {
    body: { todo, completed },
    user: { userId },
    params: { id: TaskId },
  } = req;

  if (todo === "" || completed === "") {
    throw new BadRequestError("please provide name and status");
  }

  const task = await Task.findByIdAndUpdate(
    { _id: TaskId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!task) {
    throw new NotFoundError(`No Task with id ${TaskId}`);
  }

  res.status(StatusCodes.OK).json({ task });
};

const deleteSingleTask = async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndRemove({
    _id: taskId,
    createdBy: req.user.userId,
  });

  if (!task) {
    throw new NotFoundError(`No task found with id ${taskId}`);
  }

  res.status(StatusCodes.OK).json({ msg: "task deleted" });
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateSingleTask,
  deleteSingleTask,
};
