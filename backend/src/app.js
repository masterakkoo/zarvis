
const express = require("express")
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const router = require("./routes/newregister")


// console.log(process.env.USER_port)
const port = process.env.USER_port

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

require("./db/conn")
app.use(express.json())
app.use(router);


app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log("listeing to the port at 4000")
})