const express = require('express')
const app = express()


app.use('/' , require('./routes/MainRoutes'))



app.listen(4000 , () => console.log("Server Succesfuly Started"))