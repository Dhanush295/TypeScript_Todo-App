const mongoose = require("mongoose");
// Define mongoose schemas
const todoSchema = new mongoose.Schema({
  title: String,
  description: String
});


const TODO = mongoose.model('Users', todoSchema);
module.exports = {TODO}