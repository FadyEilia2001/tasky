const express = require("express");

const router = express.Router();
const {
  getAllTasks,
  getSingleTask,
  createTask,
  updateSingleTask,
  deleteSingleTask,
} = require("../controller/tasks");

router.get("/", getAllTasks);

router.get("/:id", getSingleTask);

router.post("/", createTask);

router.patch("/:id", updateSingleTask);

router.delete("/:id", deleteSingleTask);

module.exports = router;
