const Task = require("../models/tasks");

const createTask = async (req, res) => {
  const { name, status } = req.body;

  const task = await Task.create(req.body);
  res.status(200).json({ task });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  console.log(req.body);
  res.status(200).json({ tasks });
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

  if (!task) {
    return res.status(404).json({ message: `id not found ${taskID}` });
  }
  res.status(200).json({ task });
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runvalidators: true,
  });
  console.log(req.body);

  if (!task) {
    return res.status(404).json({ message: `id not found ${id}` });
  }
  res.status(200).json({ task, id });
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  res.status(200).json({ task });
};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
};
