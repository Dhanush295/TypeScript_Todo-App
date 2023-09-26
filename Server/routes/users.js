const express = require("express");
const router = express.Router();
const { Users, Todo } = require("../db");

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({username});
    if (user){
        res.status(404).json({message: "Username Already Exist"});
    }
    else{
        const newUser = new Users({ username: username, password: password});
        newUser.save();
        res.json({ message: 'User created successfully' });
    }
});

router.post('/login', async (req, res)=>{
    const {username, password} = req.header;
    const user = await Users.findOne({username, password});
    if (user){
        res.json({message: "user Logged inn successfully"});
    }
    else{
        res.status(404).json({message: "User Not Exist!"})
    }
});

router.get('/', async(req,res) =>{
    res.json({ Todo })
});

router.get("/todo/:id", async(req, res)=>{

});

router.post("/todo", async (req, res)=>{

});

router.put('/todo/:id', async(req,res)=>{

});

router.delete('/todo/:id', async(req,res)=>{

});

module.exports = router
