const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/createtask").post(createTask);
router.post("/createtask", createTask);
router.route("/tasks").get(getAllTasks);
router.route("/tasks/:id").patch(updateTask);
router.route("/tasks/:id").get(getTask);
router.route("/tasks/:id").delete(deleteTask);
module.exports = router;
