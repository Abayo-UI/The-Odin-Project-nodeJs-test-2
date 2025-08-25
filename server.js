const express = require("express");
const app = express();
const dotenv = require("dotenv")
const path = require("path");
dotenv.config();
const PORT = process.env.PORT
const  indexRoute = require("./routes/indexRoute");
const newMessageRoute = require("./routes/newMessageRoute")

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRoute)
app.use("/new", newMessageRoute)

app.listen( PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.on( 'error', () => {
    console.error("Server failed", 'error')
})
