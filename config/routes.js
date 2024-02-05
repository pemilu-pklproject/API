const { 
    insertKandidat,
    getKandidatById,
    getAllKandidat, 
    updateKandidat,
    deleteKandidat,
    deletAllKandidat,
} = require("../controller/kandidat")

const { 
    insertRelawan, 
    getRelawanById, 
    getAllRelawan, 
    updateRelawan,
    deleteRelawan,
    deleteAllRelawan
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
    insertTPS, 
    getTPSById, 
    getAllTPS, 
    updateTPS, 
    deleteTPS, 
    deleteAllTPS 
} = require("../controller/tps");

const { 
    insertHasilSuara 
} = require("../controller/suara");


module.exports = (app) =>{
    //relawan
    app.post(`/relawan/add`, insertRelawan)
    app.get(`/relawan/:id`, getRelawanById)
    app.get(`/relawan`, getAllRelawan)
    app.put(`/relawan/update/:id`, updateRelawan)
    app.delete(`/relawan/delete/:id`, deleteRelawan)
    app.delete(`/relawan/delete`, deleteAllRelawan)

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
    app.post(`/tps/add`, insertTPS)
    app.get(`/tps/:id`, getTPSById)
    app.get(`/tps`, getAllTPS)
    app.put(`/tps/update/:id`, updateTPS)
    app.delete(`/tps/delete/:id`, deleteTPS)
    app.delete(`/tps/delete`, deleteAllTPS)


    //hasil suara
    app.post(`/hasil-suara`, insertHasilSuara)
};

