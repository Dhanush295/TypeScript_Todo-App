import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Todo(){

    const [title, setTitle ] = useState('');
    const [description, setDescription ] = useState('');
   
    const handleSubmit = async() =>{
        const todo = await axios.post('http://localhost:3000/users/todo', {title, description});
        console.log(todo.data);
    };

    return <div>
        <div style={{display: "flex", 
        justifyContent: "center"}}>
                <div style={{margin: 20, color:"white"}}>
                    <TextField id="standard-basic" label="Title" variant="standard" onChange={e => setTitle(e.target.value)} />
                </div>
                <div style={{margin: 20}}>
                    <TextField  id="standard-basic" label="Description" variant="standard" onChange={e => setDescription(e.target.value)} />
                </div>
                <dir style={{margin: 33}}>
                    <Button variant="contained" onClick={handleSubmit}>Create Todo</Button>
                </dir>

        </div>
        
</div>

}


export default Todo;