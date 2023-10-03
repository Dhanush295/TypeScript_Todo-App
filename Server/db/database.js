const mongoose = require("mongoose");
// Define mongoose schemas
const todoSchema = new mongoose.Schema({
  title: String,
  description: String
});


const TODO = mongoose.model('Todos', todoSchema);
module.exports = {TODO}