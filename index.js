const express = require('express');
const app = express();
const {Users} = require('./users')
const cors = require('cors')

app.use(cors())
app.get('/api', (req, res) => {
    res.send(Users)
})


app.listen(5000)