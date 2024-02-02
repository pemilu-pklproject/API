const express = require('express');
const app = express();
const routes = require("./config/routes")
const bodyParser = require("body-parser")
// const cors = require('cors');
const PORT = 3000;

app.use(bodyParser.json())
// app.use(cors());
 
app.use(express.json());
 
app.post('/', function (req, res) {
    console.log(req.body.name)
    res.end();
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});