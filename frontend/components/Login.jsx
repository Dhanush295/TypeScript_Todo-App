import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login(){

    return <div>
        <center>
            <Card variant="outlined" style={{width:500, padding:5, margin:150, backgroundColor:"#f6f5f7"}}><br/>
            <Typography style={{fontSize: 25, padding:10, fontFamily:"Copperplate"}}>
                Login Below
            </Typography>
            <TextField id="outlined-basic" label="Username" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
            <Button variant="contained">Login</Button><br/><br/>
            </Card>
        </center>
    </div>

}

export default Login;