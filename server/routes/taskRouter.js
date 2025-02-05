const express = require('express');

const taskController = require('../controllers/taskController.js');
const authController = require('../controllers/authController.js');

const taskRouter = express.Router();

//localhost:5000/task/addtask
//localhost:5000/task

taskRouter.post(
  '/addTask',
  taskController.addTask,
  (req, res) => (
    res.status(200).json({ updatedDoc: res.locals.updatedDoc })
  )
);

taskRouter.post(
  '/removeTask',
  taskController.removeTask,
  (req, res) => (
    res.status(200).json({ updatedDoc: res.locals.updatedDoc })
  )
);

taskRouter.post(
  '/editTask',
  taskController.editTask,
  (req, res) => (
    res.status(200).json({ updatedDoc: res.locals.updatedDoc })
  )
);

module.exports = taskRouter;
