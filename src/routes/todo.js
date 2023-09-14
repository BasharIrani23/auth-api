// routes/todo.js

const express = require("express");
const router = express.Router();
const { Todo } = require("../models");

// GET all Todos
router.get("/todo", async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// POST a new Todo
router.post("/todo", async (req, res) => {
    try {
        const newTodo = await Todo.create({ ...req.body });
        res.status(201).json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// PUT (update) a Todo by ID
router.put("/todo/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        todo.completed = !todo.completed;
        await todo.save();
        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// DELETE a Todo by ID
router.delete("/todo/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        await todo.destroy();
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
