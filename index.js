const express = require('express');
const app = express();
const {Users} = require('./users')
const cors = require('cors')

app.use(cors())
app.get('/api', (req, res) => {
    const { query } = req.query;
    const keys = ["first_name", "last_name", "email"];
    const search = (data) => {
        return data.filter((item) => keys.some(
            (key) => item[key].toLowerCase().includes(query)
        ))
    }
    query ? res.send(search(Users)) : res.send(Users)
})


app.listen(5000)