const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});

module.exports = mongoose.model("Task", taskSchema);
