const router = require('express').Router();
const ToDo = require("../models/todo");

// routes

router.post("/add/todo", (req, res) => {
    // const { todo } = req.body;
    const newTodo = new ToDo({
        todo: req.body.content
    })
    // save the todo
    newTodo.save()
        .then(() => {
            console.log("Succesfully added todo!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

router.get("/remove/:_id", (req, res) => {

    // delete todo
    ToDo.deleteOne(req.params)
        .then(() => {
            console.log("Deleted ToDo successfully");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
})

module.exports = router;