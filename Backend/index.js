import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import wrognRoutes from "../Backend/routes/WrognRoutes.js"

const app = express();

const url = "mongodb+srv://luqmanhaider01:asdfgh12345@cluster0.c0y0cdr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("Connection with MongoDB is Established");
});

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true}));



app.listen(5000);


app.use("/adminPanel",wrognRoutes);
