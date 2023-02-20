const express = require("express")
require("dotenv").config()

const PORT = process.env.PORT
const app = express()

//ROUTES
app.get("/", (req, res) => {
    res.send("<h1>Breads App</h1>")
})

//BREADS
const breadsController = require("./controllers/bread_controller.js")
app.use("/breads", breadsController)

app.listen(process.env.PORT, () => {
    console.log("I am alive, port:", PORT)
})