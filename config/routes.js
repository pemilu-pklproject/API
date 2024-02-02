const { insertRelawan } = require("../controller/relawan")
module.exports = (app) =>{
    app.post('/relawan', insertRelawan);
};