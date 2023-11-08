import express, { Request, Response} from "express";

const router = express.Router();
import { TODO } from "../db/database";

interface allTodo {
  title: String,
  description: String
}

router.get('/home', async(req:Request,res:Response) =>{
  const todo:allTodo[] = await TODO.find({}) ;
  res.json(todo);
});

router.post("/todo",async (req:Request,res:Response) => {
  try {
    const todoData: allTodo = req.body;
    const newTodo = new TODO(todoData);
    await newTodo.save();

    res.status(201).json({ message: "TODO item created successfully", todo: newTodo });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
router.delete('/todo/:id', async (req:Request,res:Response) => {
    try {
      const todoId: string = req.params.id;
      const deletedTodo = await TODO.findByIdAndDelete(todoId);
  
      if (deletedTodo) {
        res.status(200).json({ message: 'Todo deleted successfully' });
      } 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

export default router;
