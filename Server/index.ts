import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter  from "./routes/users";
const app = express();


app.use(cors());
app.use(express.json());

app.use("/users",userRouter);

mongoose
    .connect('mongodb+srv://dhanu0529:I1l1Ux1JdPh29c7s@cluster0.h5b5s2t.mongodb.net/?retryWrites=true&w=majority', {
        dbName: 'todo'
    })
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });


app.listen(3000,()=> console.log("Server Listening on port 3000"));