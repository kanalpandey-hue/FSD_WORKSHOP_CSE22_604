const express = require("express");

const app = express();

app.use(express.json());

let tasks = [];

// GET - view all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// POST - add a new task
app.post("/tasks", (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(task);

    res.status(201).json(task);
});

// PUT - mark task as completed
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = true;

    res.json(task);
});

// DELETE - remove a task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: "Task deleted"
    });
});

app.listen(3000, () => {
    console.log("To-do server running at http://localhost:3000");
});