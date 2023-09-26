const express = require("express");
const router = express.Router();
const { Users } = require("../db");

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

module.exports = router
