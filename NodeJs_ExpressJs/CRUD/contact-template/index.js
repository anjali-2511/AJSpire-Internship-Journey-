const express = require('express')
const app =  express()

//Middleware:
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// Routes:

app.get('/', (req, res) =>{

})

app.get('/show-contact', (req, res) =>{
    
})

app.get('/add-contact', (req, res) =>{
    
})

app.post('/add-contact', (req, res) =>{
    
})

app.get('/update-contact', (req, res) =>{
    
})

app.post('/update', (req, res) =>{
    
})

app.get('/delete-contact', (req, res) =>{
    
})





 
app.listen(3000, () => {
    console.log("Server started Successfully on port 3000.")
})

 