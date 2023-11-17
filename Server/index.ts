import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter  from "./routes/users";
const app = express();


app.use(cors());
app.use(express.json());

app.use("/users",userRouter);

mongoose
    .connect('mongodb url', {
        dbName: 'todo'
    })
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });


app.listen(3000,()=> console.log("Server Listening on port 3000"));
