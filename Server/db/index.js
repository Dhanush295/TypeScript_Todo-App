const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

const todoSchema = new mongoose.Schema({
  title : String,
  description : String
});


const Users = mongoose.model('Users', userSchema);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = {Users, Todo}