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
    insertHasilSuara, 
    getHasilSuaraById, 
    getAllHasilSuara,
    updateHasilSuara,
    deleteHasilSuara,
    deletAllHasilSuara
} = require("../controller/suara");

const { 
    insertAlamat, 
    updateAlamat,
} = require("../controller/alamat");

const { 
    authLogin, 
    KandidatRegister, 
    kandidatLogin,
    RelawanLogin
} = require("../controller/auth");

const gen_token = require('../helper/generate-token')

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
    app.post(`/hasil-suara/add`, insertHasilSuara)
    app.get(`/hasil-suara/:id`, getHasilSuaraById)
    app.get(`/hasil-suara`, getAllHasilSuara)
    app.put(`/hasil-suara/update/:id`, updateHasilSuara)
    app.delete(`/hasil-suara/delete/:id`, deleteHasilSuara)
    app.delete(`/hasil-suara/delete`, deletAllHasilSuara)

    //alamat
    app.post(`/pemilih/alamat/add`, insertAlamat)
    app.put(`/pemilih/alamat/update/:id`, updateAlamat)

    //login
    app.post(`/login/admin`, authLogin)
    app.post(`/login/kandidat`, kandidatLogin)
    app.post(`/login/relawan`, RelawanLogin)
    app.post(`/regis/kandidat`, KandidatRegister)
    // app.post(`/regis/admin`, AdminRegister)

    app.post(`/gen-access-token`, (req, res) => {
        const { refresh_token } = req.body
        gen_token(refresh_token, (err, acces_token) => {
          if (err) return res.status(401).json({ status: false, msg: "Unauthorized" });
          res.status(200).json({status: true, acces_token})
        })
      })
};

