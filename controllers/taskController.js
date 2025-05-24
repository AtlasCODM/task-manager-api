const Task = require("../models/Task");

const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user._id });
  res.json(task);
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

const getSingleTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
  res.json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.json({ message: "Task deleted" });
};

module.exports = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
