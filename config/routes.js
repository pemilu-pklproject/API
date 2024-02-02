const { 
    insertKandidat 
} = require("../controller/kandidat")

const { 
    insertRelawan 
} = require("../controller/relawan")

module.exports = (app) =>{
    //relawan
    app.post('/relawan', insertRelawan);

    //kandidat
    app.post('/kandidat', insertKandidat)
};

