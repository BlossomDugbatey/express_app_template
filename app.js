//importing or requiring the essential dependencies
const express = require ('express')
const ObjectId = require('mongodb').ObjectId
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts');


const app = express()

//middleware for communication or connectivity
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cors());
app.use(express.urlencoded({extended: true}));

//setting our values for rendering views
app.set("layout","./layouts/main")

//setting the engine we want to use (view engine)
app.set("view engine", "ejs")

//requiring routes for use(app/home)
const appRoute = require("./server/routes/pageRoutes")
app.use('/', appRoute)

//port 
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server connected to port: ${PORT}`)
})