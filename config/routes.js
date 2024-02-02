const { 
    insertKandidat 
} = require("../controller/kandidat")

const { 
    insertRelawan 
} = require("../controller/relawan")

const { 
    insertPemilih 
} = require("../controller/pemilih")


module.exports = (app) =>{
    //relawan
    app.post('/relawan', insertRelawan);

    //kandidat
    app.post('/kandidat', insertKandidat)

    //pemilih
    app.post('/pemilih', insertPemilih)
};

