const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    image: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    profileImg: { type: String }
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
