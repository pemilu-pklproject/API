const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./config/routes');

const PORT = 5000;

app.use(bodyParser.json());

// Load routes into the app
routes(app);

// Define a default route for unmatched paths
app.use((req, res) => {
    res.status(404).send('Failed');
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log('Server listening on PORT', PORT);
});
