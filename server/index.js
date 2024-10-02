const express= require('express');
const dotenv = require("dotenv").config();
const connectDb = require('./config/dbConnection');
const bodyParser = require('body-parser');
const cors= require('cors')

connectDb();
const app=express();

const PORT =process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use("/user/details", require("./routes/userRouter"));


app.listen(PORT, ()=>{
    console.log(`Server started by the port number of ${PORT}`);
})