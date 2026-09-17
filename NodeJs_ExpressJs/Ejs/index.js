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

app.use(express.urlencoded({extended: false}))
app.get('/form', (req, res) =>{
    res.render('form',{message: null})
})

app.post('/submit', (req, res) =>{
    const name = req.body.myname

    const message = `Hello, ${name} You submitted the form.`
     res.render('form', {message:message})
})

app.get('/home', (req,res)=>{
    let items=['Apple', 'Banana' , 'Cherry' , 'Orange']
    let fruits = [
            { name: "Apple", color: "Red", bg: "Red"},
            { name: "Banana", color: "Yellow", bg: "Red" },
            { name: "Grape", color: "Purple", bg: "Red" },
            { name: "Orange", color: "Orange", bg: "Red" }
        ];
    res.render("home", {title:'Home page', message:" Welcome" , items, objects:fruits})
})


app.listen(3000,()=>{
    console.log('Successfully Connected on port 3000.')
})

 