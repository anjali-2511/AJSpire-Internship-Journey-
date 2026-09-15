const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log('Successfully Connected on port 3000.')
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'}
    ]

    res.json(users)
    
})

app.get('/about', (req, res) =>{
    res.redirect('/user')
})
app.get('/user', (req, res) =>{
    res.send("hello world")
})

app.get('/html', (req, res) => {
    res.render('html')
})

app.get('/download', (req, res) => {
    res.download('./files/01 React JS Practical Task 1.pdf', 'Document.pdf')
})
app.get('/sendfile', (req, res) => {
    res.sendFile(__dirname + '/files/01 React JS Practical Task 1.pdf')
})
