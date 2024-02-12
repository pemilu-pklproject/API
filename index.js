require("dotenv").config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes');
const swaggerUI = require('swagger-ui-express')
const PORT = process.env.APP_PORT || 5000

app.use(cors({origin: "*"}));

app.use(bodyParser.json());

routes(app);

const docApi = require('./apidocs.json')
app.use('/assets', express.static('assets'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docApi))
app.use((req, res) => {
    res.status(404).send('Failed');
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log('Server listening on PORT', PORT);
});
