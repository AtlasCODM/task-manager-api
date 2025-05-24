const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.post("/", protect, createTask);
router.get("/", protect, getAllTasks);
router.get("/:id", protect, getSingleTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;
