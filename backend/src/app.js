
const express = require("express")
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const router = require("./routes/newregister")


// console.log(process.env.USER_port)
const port = 4000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://zarvis-essentials.netlify.app");
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
