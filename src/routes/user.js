// routes/todo.js

const express = require("express");
const router = express.Router();
const { users } = require("../models");
const e = require("express");

// GET all Todos
router.get("/users", async (req, res) => {
    try {
        let data = await users.findAll();
        data = data.map((user) => {
            delete user.token;
            delete user.password;

            return user;
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
