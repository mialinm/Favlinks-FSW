const db = require('./db')
const express = require("express")

const app = express()

const port = 3000

app.get('/api/links', db.getLinks)

app.get('/', (req, res)=> {
    res.send("Hello World! We're live on our first server!")
})

app.post('/api/links', db.createLink);

app.put('/api/links/:id', db.updateLink);

app.delete('/api/links/:id', db.deleteLink);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

