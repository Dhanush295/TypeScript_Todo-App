import mongoose from "mongoose";
// Define mongoose schemas
const todoSchema = new mongoose.Schema({
  title: String,
  description: String
});


export const TODO = mongoose.model('Todos', todoSchema);
