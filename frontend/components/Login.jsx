import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login(){

    const [username , setUserName ] = useState('');
    const [password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async ()=>{
        const response = await axios.post('http://localhost:3000/users/login',{},{
        headers: {
            'Content-Type': 'application/json', 
            username: username,
            authorization: "Bearer " + localStorage.getItem("token")
        }});
        console.log(response.data)
        navigate('/home');
    };

    return <div>
        <center>
            <Card variant="outlined" style={{width:500, padding:5, margin:150, backgroundColor:"#f6f5f7"}}><br/>
            <Typography style={{fontSize: 25, padding:10, fontFamily:"Copperplate"}}>
                Login Below
            </Typography>
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={e => setUserName(e.target.value)}/><br/><br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)} /><br/><br/>
            <Button variant="contained" onClick={handleSubmit}>Login</Button><br/><br/>
            </Card>
        </center>
    </div>

}

export default Login;