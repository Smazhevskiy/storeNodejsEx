const express = require('express')

const PORT = 1337

const app = express()

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))