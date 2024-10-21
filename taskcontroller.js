const Task = require('../models/task');

let tasks = [];

exports.getAllTasks = (req, res) => {
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const { title } = req.body;
    const newTask = new Task(title);
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = completed;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};