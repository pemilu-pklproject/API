const { 
    insertKandidat,
    getKandidatById,
    getAllKandidat, 
    updateKandidat,
    deleteKandidat,
    deletAllKandidat,
} = require("../controller/kandidat")

const { 
    insertRelawan 
} = require("../controller/relawan")

const { 
    insertPemilih, 
    getPemilihById, 
    getAllPemilih, 
    updatePemilih,
    deletePemilih,
    deleteAllPemilih
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
    app.post(`/relawan`, insertRelawan)

    //kandidat
    app.post(`/kandidat/add`, insertKandidat)
    app.get(`/kandidat/:id`, getKandidatById)
    app.get(`/kandidat`, getAllKandidat)
    app.put(`/kandidat/update/:id`, updateKandidat)
    app.delete(`/kandidat/delete/:id`, deleteKandidat)
    app.delete(`/kandidat/delete`, deletAllKandidat)

    //pemilih
    app.post(`/pemilih/add`, insertPemilih)
    app.get(`/pemilih/:id`, getPemilihById)
    app.get(`/pemilih`, getAllPemilih)
    app.put(`/pemilih/update/:id`, updatePemilih)
    app.delete(`/pemilih/delete/:id`, deletePemilih)
    app.delete(`/pemilih/delete`, deleteAllPemilih)
    //tps
    app.post(`/tps`, insertTps)

    //relawan role
    app.post(`/relawan-role`, insertRelawanRole)

    //hasil suara
    app.post(`/hasil-suara`, insertHasilSuara)
};

