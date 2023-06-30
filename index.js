const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    return res.send('xin chao')
})

app.listen(port, () => {
    console.log(`Example app at port ${port}`)
})