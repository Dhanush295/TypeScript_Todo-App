import React, { useState } from "react";
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

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/todo", {
        title,
        description,
      });
      const newTodo = response.data;
      setTodoData((prevTodoData) => [...prevTodoData, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
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
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ margin: 20 }}>
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={{ margin: 33 }}>
          <Button variant="contained" onClick={handleSubmit}>Create Todo</Button>
        </div>
      </div>

        {todoData.map((todo) => (
            <ShowTodo
                title={todo.title}
                description={todo.description}
                id={todo._id}
            />
        ))}

    </div>
  );
}

function ShowTodo(props) {
    return <div>
        {props.title}
    </div>;
}

export default Todo;
