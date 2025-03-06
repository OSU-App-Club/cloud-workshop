const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser')

app.use(bodyParser.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})