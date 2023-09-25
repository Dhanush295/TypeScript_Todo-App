const express = require("express");
const cors = require("cors");
const app = express();
const adminRouter = require("./routes/admin");

app.use(cors());
app.use(express.json());

app.use("/adim", adminRouter)

app.listen(3000, ()=> console.log("Server Listening on port 3000"));