const { 
    insertKandidat,
    getKandidatById,
    getAllKandidat 
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

const { 
    insertHasilSuara 
} = require("../controller/suara");


module.exports = (app) =>{
    //relawan
    app.post('/relawan', insertRelawan)

    //kandidat
    app.post('/kandidat', insertKandidat)
    app.get('/kandidat:id', getKandidatById)
    app.get('/kandidat', getAllKandidat)

    //pemilih
    app.post('/pemilih', insertPemilih)

    //tps
    app.post('/tps', insertTps)

    //relawan role
    app.post('/relawan-role', insertRelawanRole)

    //hasil suara
    app.post('/hasil-suara', insertHasilSuara)
};

