const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.listen(4000)
//////////////////////////////////////////////////////////

let products = []

app.post("/", (req, res) => {
    products.push(req.body)
    res.send({products})
})

app.get("/remove/:index", (req, res) => {
    const {index} = req.params
console.log(index);
    products = products.filter((product, i) => i !== Number(index))
    res.send({products})
})

