import express from "express"
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const connectDB = require('./src/config/db')
const user = require('./src/routes/user.route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/user',user)

connectDB();
app.listen(port);