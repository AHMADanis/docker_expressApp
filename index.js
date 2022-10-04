const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('This is an exprees app response!')
})

app.get('/me', (req, res) => {
  res.send('Hi, I am Anees!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})