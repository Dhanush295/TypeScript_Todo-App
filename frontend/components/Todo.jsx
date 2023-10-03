import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Todo(){

    const [title, setTitle] = useState('');
    const [description, setDescription ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const response = await axios.post('http://localhost:3000/users/todo',{title, description},{
            headers:{
                'Content-Type': 'application/json', 
                authorization: "Bearer " + localStorage.getItem("token")
            }
        });
        console.log(response.data);
        navigate('/home');

    };

    return <div>
    <center>
        <Card variant="outlined" style={{width:500, padding:5, margin:150, backgroundColor:"#f6f5f7"}}><br/>
        <Typography style={{fontSize: 25, padding:10, fontFamily:"Copperplate"}}>
            Create Todo
        </Typography>
        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={e => setTitle(e.target.value)} /><br/><br/>
        <TextField id="outlined-basic" label="Description" variant="outlined" onChange={e => setDescription(e.target.value)} /><br/><br/>
        <Button variant="contained" onClick={handleSubmit}>Create</Button><br/><br/>
        </Card>
    </center>
</div>

}


export default Todo;