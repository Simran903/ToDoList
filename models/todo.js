const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = new mongoose.model("ToDo", ToDoSchema);