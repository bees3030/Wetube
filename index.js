//const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening in port ${PORT}`);
}

function handleHome(req, res){
    res.send('Hello form server');
}

function handleProfile(req,res){
    res.send("You are on my profile");
}

app.get("/",handleHome);

app.get("/profile",handleProfile);

app.listen(PORT, handleListening);