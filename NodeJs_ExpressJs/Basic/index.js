// Nodejs:
console.log("object");

// ExpressJs: 
const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log('Successfully Connected on port 3000.')
})

// app.get('/', (req, res) => {
//     res.send("<h1>Hello Anjali</h1>")
// })


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>Welcome to About Page</h1>")
})

app.get('/about/user', (req, res) => {
    res.send("<h1>Welcome to User Page</h1>")
})

app.get('/:userid-:bookname', (req,res) => {
    res.send(req.params)
})

app.get('/search', (req,res) => {
    const name = req.query.name
    const age = req.query.age
    res.send(`Search results for Name : ${name} , Age: ${age}`)
})


