const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config()

// console.log(process.env)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// logging in the terminal about requested API
app.use(morgan("dev"));

const Users = require('./api/routes/users')
app.use("/", Users)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}. `)
})
