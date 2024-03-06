const express = require('express');

const app = express();

app.get('/test', (resq,res)=> [
    res.json('Ok')
])

app.listen(8080);