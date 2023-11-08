import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";


interface AllTodo  {
  title: String,
  description: String,
  _id: String,
  onDelete : (id: String) =>void;
}

function Todo() {
  const [title, setTitle] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [todoData, setTodoData] = useState<AllTodo[]>([]);


  const fetchTodos = async () => {
    try {
      const response = await axios.get<AllTodo[]>("http://localhost:3000/users/home");
      setTodoData(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post<{ todo: AllTodo }>("http://localhost:3000/users/todo", {
        title,
        description,
      });
      const newTodo = response.data.todo;

      setTodoData((prevTodoData) => [...prevTodoData, newTodo]);

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleDelete = async (todoId: String) => {
    try {
      await axios.delete(`http://localhost:3000/users/todo/${todoId}`);

      setTodoData((prevTodoData) =>
        prevTodoData.filter((todo) => todo._id !== todoId)
      );
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <div style={{display:"flex",margin:10,justifyContent: "center"}}> 
      <h1>CREATE YOUR TODO</h1>
      </div>
      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: 20 }}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ margin: 20 }}>
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={{ margin: 33 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Create Todo
          </Button>
        </div>
      </div>

      <div>
        {todoData.map((todo) => (
          <ShowTodo
            key={todo._id.toString()}
            title={todo.title}
            description={todo.description}
            _id={todo._id}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

function ShowTodo(props: AllTodo) {
  return (
    <div style={{display: "inline-grid"}}>
      <Box sx={{ maxWidth: 500, margin:5 }}>
        <Card  variant="outlined" style={{backgroundColor: "#E2E2E2"}}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="h5" component="div">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => props.onDelete(props._id)}>
              Delete Todo
            </Button>
          </CardActions>
        </Card>
    </Box>
    </div>

  );
}

export default Todo;
