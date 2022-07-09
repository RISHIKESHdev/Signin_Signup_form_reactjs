import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_URL,{useNewURLParser:true,useUnifiedTopology:true})
    .then(()=>{ app.listen(PORT,()=>console.log(`Server running on port :${PORT}`))})
    .catch((error)=>console.log(error.message))