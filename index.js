require("dotenv").config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./config/routes');

const PORT = 5000;

app.use(bodyParser.json());

routes(app);

app.use((req, res) => {
    res.status(404).send('Failed');
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log('Server listening on PORT', PORT);
});
