import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoData, setTodoData] = useState([]);


  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/home");
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
      const response = await axios.post("http://localhost:3000/users/todo", {
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

  const handleDelete = async (todoId) => {
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

      <div style={{backgroundColor:"#c2c2d6", padding:2}}>
        {todoData.map((todo) => (
          <ShowTodo
            key={todo._id}
            title={todo.title}
            description={todo.description}
            id={todo._id}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

function ShowTodo(props) {
  return (
    <div style={{display: "inline-grid"}}>
      <Box sx={{ maxWidth: 500, margin:2 }}>
        <Card  variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="h5" component="div">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => props.onDelete(props.id)}>
              Delete Todo
            </Button>
          </CardActions>
        </Card>
    </Box>
    </div>

  );
}

export default Todo;
