// const express = require('express')

import express from 'express';

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.send("Home Page")
})

app.get('/about', (req,res)=>{
    res.render("about", {title:'About page', message:" Welcome"})
})


app.listen(3000,()=>{
    console.log('Successfully Connected on port 3000.')
})

 