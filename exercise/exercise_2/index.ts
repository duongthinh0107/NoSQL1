import express from "express"
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const connectDB = require('./src/config/db')
const contact = require('./src/routes/contact.route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/contact',contact)

connectDB();
app.listen(port);