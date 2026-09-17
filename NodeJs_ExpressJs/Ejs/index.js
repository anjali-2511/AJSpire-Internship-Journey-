// const express = require('express')

import express from 'express';

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.send("Home Page")
})

app.get('/about', (req,res)=>{
    let items=['Apple', 'Banana' , 'Cherry' , 'Orange']
    let fruits = [
            { name: "Apple", color: "Red", bg: "Red"},
            { name: "Banana", color: "Yellow", bg: "Red" },
            { name: "Grape", color: "Purple", bg: "Red" },
            { name: "Orange", color: "Orange", bg: "Red" }
        ];
    res.render("about", {title:'About page', message:" Welcome" , items, objects:fruits})
})


app.listen(3000,()=>{
    console.log('Successfully Connected on port 3000.')
})

 