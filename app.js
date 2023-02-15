const express = require('express');
const path = require('path')
const app = express();


const router = require('./router');


app.use(express.static(path.join(__dirname, 'public')))

app.set('model view engine','ejs')

app.use(router)

app.listen(4000)