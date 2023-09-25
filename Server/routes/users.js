const express = require("express");
const router = express.Router();
const { User } = require("../db");

router.post("signup", async (req, res) => {
    const { username, password } = req.body; 
    const user = await User.findOne({username});
    if (user){
        res.status(403).json({ message:'User already exists' });
    }
    else{
        try {
            const newUser = new User({ username, password });
            await newUser.save();
            res.json({ message: 'User created successfully' });
        } catch (error) {
            console.error('Error saving user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
        res.json({ message: 'user created successfully'});
    }
});

module.exports = router
