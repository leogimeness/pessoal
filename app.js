const express = require('express');
const path = require('path')
const app = express();
const logMiddleWare = require("./middlewares/logSite")
const methodOverride = require('method-override');
const session = require('express-session')
const globalSetter = require('./middlewares/globalSetter');



const router = require('./router');


app.set('model view engine','ejs')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}));
app.use(logMiddleWare)
app.use(methodOverride('_method'));
app.use(session({ secret:"senha", resave:false,saveUninitialized:false}))
app.use(globalSetter)

app.use(router)

app.listen(4000)