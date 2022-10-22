const express = require('express')
const {randomBytes} = require('crypto')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.port || 4000
const posts = {};

app.use(bodyParser.json())

app.get('/posts', (req, res)=> {
    res.send(posts)
})

app.post('/posts', (req, res)=> {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body

    posts[id] = {
        id,
        title
    }
    
    res.status(201).send(posts[id])
})

app.listen(PORT, () => {
    console.log(`The POSTS service is listening on port ${PORT}.`)
})