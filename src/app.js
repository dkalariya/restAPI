const express = require('express')
require("./db/conn")
const Student = require("./models/students")
const studentRouter=require("./routers/student")

const app = express();
const port = process.env.PORT || 5500;

app.use(express.json())
app.use(studentRouter)

app.listen(port)