import express from "express";

const app = express();

app.get("/" , (req, res) =>{
    res.write("Home page laoding...");
    res.end();
})

app.listen(4000);