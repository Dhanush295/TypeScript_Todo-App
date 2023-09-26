const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
const Users = mongoose.model('Users', userSchema);
module.exports = {Users}