const express = require("express");

const router = express.Router();
const { getAllTasks, getSingleTask } = require("../controller/tasks");

router.get("/", getAllTasks);

router.get("/search", getSingleTask);

module.exports = router;
