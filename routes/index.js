const router = require('express').Router();
const ToDo = require("../models/todo");


// ROUTES WILL BE HERE...
router.get("/", async(req, res) => {
    const allToDo = await ToDo.find();
    res.render("index", {todo: allToDo});
});

module.exports = router;