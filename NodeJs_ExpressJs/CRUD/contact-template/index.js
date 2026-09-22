const express = require('express')
const app =  express()
const mongoose = require("mongoose")
const Contact = require("./models/contacts-models")

// Database Connection:
mongoose.connect('mongodb://127.0.0.1:27017/contact-crud').then(() => console.log("Database Connected"))


//Middleware:
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// Routes:

app.get('/', async (req, res) =>{
    const contacts = await Contact.find()
    res.render('home', {contacts:contacts})
})

app.get('/show-contact/:id', async (req, res) =>{
   const contact = await Contact.findOne({_id: req.params.id})
   res.render('show-contact',{contact:contact}) 
})

app.get('/add-contact', (req, res) =>{
    res.render('add-contact')
})

app.post('/add-contact', (req, res) =>{
    
})

app.get('/update-contact/:id', (req, res) =>{
    res.render('update-contact')
})

app.post('/update/:id', (req, res) =>{
    
})

app.get('/delete-contact/:id', (req, res) =>{
    
})





 
app.listen(3000, () => {
    console.log("Server started Successfully on port 3000.")
})

 