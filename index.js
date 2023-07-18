const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Chef server is running at http://localhost')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})