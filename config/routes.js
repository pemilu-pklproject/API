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
    deleteAllRelawan,
    getRelawanByKandidat
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
    deleteAllTPS, 
    getTPSByDapil,
    getTPSByWilayah
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
    authLogin, 
    KandidatRegister, 
    kandidatLogin,
    RelawanLogin
} = require("../controller/auth");

const gen_token = require('../helper/generate-token');

const { 
    getKabupatenById,
    getAllProvinsi,
    getKecamatanById,
    getDesaById,
    getProvinsiById,
    getAllKabupaten,
    getAllKecamatan,
    getAllDesa
} = require("../controller/wilayah");

const { 
    getAllDapil, 
    getDapilById 
} = require("../controller/dapil");

const { 
    getJabatanById, 
    getAllJabatan 
} = require("../controller/jabatan");

const { 
    insertAdmin, 
    getAllAdmin, 
    getAdminById,
    updateAdmin
} = require("../controller/admin");

const BASE_URL = '/si-pemilu/api/v1'

module.exports = (app) =>{

    //admin
    app.post(`${BASE_URL}/admin/add`, insertAdmin)
    app.get(`${BASE_URL}/admin.json`, getAllAdmin)
    app.get(`${BASE_URL}/admin/:id.json`, getAdminById)
    app.put(`${BASE_URL}/admin/update/:id`, updateAdmin)
    app.delete(`${BASE_URL}/admin/delete/:id`)

    //relawan
    app.post(`${BASE_URL}/relawan/add`, insertRelawan)
    app.get(`${BASE_URL}/relawan/:id`, getRelawanById)
    app.get(`${BASE_URL}/relawan`, getAllRelawan)
    app.get(`${BASE_URL}/data-relawan/:id_kandidat`, getRelawanByKandidat)
    app.put(`${BASE_URL}/relawan/update/:id`, updateRelawan)
    app.delete(`${BASE_URL}/relawan/delete/:id`, deleteRelawan)
    app.delete(`${BASE_URL}/relawan/delete`, deleteAllRelawan)

    //kandidat
    app.post(`${BASE_URL}/kandidat/add`, insertKandidat)
    app.get(`${BASE_URL}/kandidat/:id.json`, getKandidatById)
    app.get(`${BASE_URL}/kandidat.json`, getAllKandidat)
    app.put(`${BASE_URL}/kandidat/update/:id`, updateKandidat)
    app.delete(`${BASE_URL}/kandidat/delete/:id`, deleteKandidat)
    app.delete(`${BASE_URL}/kandidat/delete`, deletAllKandidat)

    //pemilih
    app.post(`${BASE_URL}/pemilih/add`, insertPemilih)
    app.get(`${BASE_URL}/pemilih/:id`, getPemilihById)
    app.get(`${BASE_URL}/pemilih`, getAllPemilih)
    app.put(`${BASE_URL}/pemilih/update/:id`, updatePemilih)
    app.delete(`${BASE_URL}/pemilih/delete/:id`, deletePemilih)
    app.delete(`${BASE_URL}/pemilih/delete`, deleteAllPemilih)

    //tps
    app.post(`${BASE_URL}/tps/add`, insertTPS)
    app.get(`${BASE_URL}/tps/:id`, getTPSById)
    app.get(`${BASE_URL}/tps`, getAllTPS)
    app.get(`${BASE_URL}/tps/:id_dapil.json`, getTPSByDapil)
    app.get(`${BASE_URL}/data-tps/:id_wilayah`, getTPSByWilayah)
    app.put(`${BASE_URL}/tps/update/:id`, updateTPS)
    app.delete(`${BASE_URL}/tps/delete/:id`, deleteTPS)
    app.delete(`${BASE_URL}/tps/delete`, deleteAllTPS)


    //hasil suara
    app.post(`${BASE_URL}/hasil-suara/add`, insertHasilSuara)
    app.get(`${BASE_URL}/hasil-suara/:id`, getHasilSuaraById)
    app.get(`${BASE_URL}/hasil-suara`, getAllHasilSuara)
    app.put(`${BASE_URL}/hasil-suara/update/:id`, updateHasilSuara)
    app.delete(`${BASE_URL}/hasil-suara/delete/:id`, deleteHasilSuara)
    app.delete(`${BASE_URL}/hasil-suara/delete`, deletAllHasilSuara)

    //login
    app.post(`${BASE_URL}/login/admin`, authLogin)
    app.post(`${BASE_URL}/login/kandidat`, kandidatLogin)
    app.post(`${BASE_URL}/login/relawan`, RelawanLogin)
    app.post(`${BASE_URL}/regis/kandidat`, KandidatRegister)
    // app.post(`/regis/admin`, AdminRegister)

    //wilayah
    app.get(`${BASE_URL}/wilayah/provinsi.json`, getAllProvinsi)
    app.get(`${BASE_URL}/wilayah/provinsi/:id`, getProvinsiById)
    app.get(`${BASE_URL}/wilayah/kabupaten-kota/:id_provinsi.json`, getAllKabupaten)
    app.get(`${BASE_URL}/wilayah/kabupaten-kota/:id`, getKabupatenById)
    app.get(`${BASE_URL}/wilayah/kecamatan/:id_kab_kota.json`, getAllKecamatan)
    app.get(`${BASE_URL}/wilayah/kecamatan/:id`, getKecamatanById)
    app.get(`${BASE_URL}/wilayah/kelurahan-desa/:id_kecamatan.json`, getAllDesa)
    app.get(`${BASE_URL}/wilayah/kelurahan-desa/:id`, getDesaById)

    //dapil
    app.get(`${BASE_URL}/dapil/:id_jabatan/:id_wilayah.json`, getAllDapil)
    app.get(`${BASE_URL}/caleg-dapil/:id`, getDapilById)

    //jabatan
    app.get(`${BASE_URL}/calon-jabatan.json`, getAllJabatan)
    app.get(`${BASE_URL}/calon-jabatan/:id.json`, getJabatanById)

    app.post(`/gen-access-token`, (req, res) => {
        const { refresh_token } = req.body
        gen_token(refresh_token, (err, acces_token) => {
          if (err) return res.status(401).json({ status: false, msg: "Unauthorized" });
          res.status(200).json({status: true, acces_token})
        })
      })
};

