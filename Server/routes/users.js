const express = require("express");
const router = express.Router();
const { TODO } = require("../db/database");


router.get('/home', async(req,res) =>{
  const todo = await TODO.find({}) ;
  res.json(todo);
});

router.post("/todo",async (req, res) => {
  try {
    const todoData = req.body;
    const newTodo = new TODO(todoData);
    await newTodo.save();

    res.status(201).json({ message: "TODO item created successfully", todo: newTodo });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
router.delete('/todo/:id', async (req, res) => {
    try {
      const todoId = req.params.id;
      const deletedTodo = await TODO.findByIdAndDelete(todoId);
  
      if (deletedTodo) {
        res.status(200).json({ message: 'Todo deleted successfully' });
      } 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router
