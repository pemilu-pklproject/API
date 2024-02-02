const { 
    insertKandidat 
} = require("../controller/kandidat")

const { 
    insertRelawan 
} = require("../controller/relawan")

const { 
    insertPemilih 
} = require("../controller/pemilih");

const { 
    insertTps 
} = require("../controller/tps");

const { 
    insertRelawanRole 
} = require("../controller/relawan_role");


module.exports = (app) =>{
    //relawan
    app.post('/relawan', insertRelawan)

    //kandidat
    app.post('/kandidat', insertKandidat)

    //pemilih
    app.post('/pemilih', insertPemilih)

    //tps
    app.post('/tps', insertTps)

    //relawan role
    app.post('/relawan-role', insertRelawanRole)
};

