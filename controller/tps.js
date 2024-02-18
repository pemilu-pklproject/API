const { TPS, Relawan, Wilayah, Hasil_suara, Sequelize } = require("../database/models");
const wilayah = require("../database/models/wilayah");


//insert TPS
const insertTPS = async (req, res) => {

    TPS
    .create(req.body)
    .then(()=>{ res.json({ status:true, message: "data input success"})})
    .catch(err=>{
        console.log(err)
        res.statusCode=500
        res.send("server error")
    })
};

//get all TPS
const getAllTPS = async (req, res) =>{
    TPS
    .findAll()
    .then((datas)=>{
        res.status=true
        res.json(datas)
    })
    .catch(err =>{
        console.log(err)
        res.status=500
        res.send("server error")
    })
};

const getTPSAll = async (req, res) =>{
    TPS
    .findAll({
        include: [
            {
                model: Wilayah,
                as:'tps_wilayah',
                attributes: [
                    // [Sequelize.literal('SUBSTRING(kode, 1, 2)'), 'provinsi'],
                    // [Sequelize.literal('SUBSTRING(kode, 1, 5)'), 'kab_kota'],
                    // [Sequelize.literal('SUBSTRING(kode, 1, 8)'), 'kecamatan'],
                    // [Sequelize.literal('SUBSTRING(kode, 1, 13)'), 'desa_kel'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 2 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 2) = SUBSTRING(tps_wilayah.kode, 1, 2) LIMIT 1
                            )
                        END
                    )`), 'nama_provinsi'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 5 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 5) = SUBSTRING(tps_wilayah.kode, 1, 5) LIMIT 1
                            )
                        END
                    )`), 'nama_kabupaten'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 8 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 8) = SUBSTRING(tps_wilayah.kode, 1, 8) LIMIT 1
                            )
                        END
                    )`), 'nama_kecamatan'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 13 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 13) = SUBSTRING(tps_wilayah.kode, 1, 13) LIMIT 1
                            )
                        END
                    )`), 'nama_desa']
                ]
            },
            {
                model: Relawan,
                as:'saksi',
                attributes:['nama']

            },
            {
                model: Hasil_suara,
                as: 'suara',
                attributes: ['dokumen', 'total']
            }
        ]
    })
    .then((datas)=>{
        res.status=true
        res.json(datas)
    })
    .catch(err =>{
        console.log(err)
        res.status=500
        res.send("server error")
    })
};


//get TPS by Id
const getTPSById = async (req, res) => {
    TPS
        .findAll({ 
            where: 
            { 
                id: req.params.id 
            },
            include: [
                {
                    model: Wilayah,
                    as:'tps_wilayah',
                    attributes:[
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 2 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 2) = SUBSTRING(tps_wilayah.kode, 1, 2) LIMIT 1
                                )
                            END
                        )`), 'nama_provinsi'],
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 5 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 5) = SUBSTRING(tps_wilayah.kode, 1, 5) LIMIT 1
                                )
                            END
                        )`), 'nama_kabupaten'],
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 8 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 8) = SUBSTRING(tps_wilayah.kode, 1, 8) LIMIT 1
                                )
                            END
                        )`), 'nama_kecamatan'],
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 13 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 13) = SUBSTRING(tps_wilayah.kode, 1, 13) LIMIT 1
                                )
                            END
                        )`), 'nama_desa']
                    ]
    
                },
                {
                    model: Relawan,
                    as:'saksi',
                    attributes:['nama']
    
                },
                
            ]
        })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id TPS not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//get tps dan suara by id kandidat
const getTPSandSuaraByKandidat = async (req, res) => {
    const kandidat = req.params.id_kandidat

    TPS
        .findAll({ where: 
            { 
                id_kandidat: kandidat 
            },
            include: [
                {
                    model: Wilayah,
                    as:'tps_wilayah',
                    attributes:[
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 2 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 2) = SUBSTRING(tps_wilayah.kode, 1, 2) LIMIT 1
                                )
                            END
                        )`), 'nama_provinsi'],
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 5 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 5) = SUBSTRING(tps_wilayah.kode, 1, 5) LIMIT 1
                                )
                            END
                        )`), 'nama_kabupaten'],
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 8 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 8) = SUBSTRING(tps_wilayah.kode, 1, 8) LIMIT 1
                                )
                            END
                        )`), 'nama_kecamatan'],
                        [Sequelize.literal(`(
                            CASE
                                WHEN LENGTH(kode) >= 13 THEN (
                                    SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 13) = SUBSTRING(tps_wilayah.kode, 1, 13) LIMIT 1
                                )
                            END
                        )`), 'nama_desa']
                    ]
    
                },
                {
                    model: Relawan,
                    as:'saksi',
                    attributes:['nama']
    
                },
                {
                    model: Hasil_suara,
                    as: 'suara',
                    attributes: ['dokumen', 'total']
                }
            ]
        })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id TPS not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//get tps by kandidat
const getTPSByKandidat = async (req, res) => {
    const kandidat = req.params.id_kandidat
    TPS
        .findAll({ where: 
            { 
                id_kandidat: kandidat 
            },
            include: [
                {
                    model: Wilayah,
                    as:'tps_wilayah',
                    attributes:[[Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 2 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 2) = SUBSTRING(tps_wilayah.kode, 1, 2) LIMIT 1
                            )
                        END
                    )`), 'nama_provinsi'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 5 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 5) = SUBSTRING(tps_wilayah.kode, 1, 5) LIMIT 1
                            )
                        END
                    )`), 'nama_kabupaten'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 8 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 8) = SUBSTRING(tps_wilayah.kode, 1, 8) LIMIT 1
                            )
                        END
                    )`), 'nama_kecamatan'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 13 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 13) = SUBSTRING(tps_wilayah.kode, 1, 13) LIMIT 1
                            )
                        END
                    )`), 'nama_desa']]
    
                },
                {
                    model: Relawan,
                    as:'saksi',
                    attributes:['nama']
    
                }
            ],
        })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id TPS not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//get TPS by dapil
const getTPSByDapil = async (req, res) => {
    TPS
        .findAll({ where: { kode_dapil : req.params.kode_dapil } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id TPS not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//get TPS by wilayah
const getTPSByWilayah = async (req, res) => {
    TPS
        .findAll({ where: { id_wilayah : req.params.id_wilayah } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id TPS not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};


//update TPS
const updateTPS = async (req, res) => {
    TPS
    .update(req.body, { where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'data update success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete TPS
const deleteTPS = async (req, res) => {
    TPS
    .destroy({ where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete all TPS
const deleteAllTPS = async (req, res) => {
    TPS
    .destroy({ where:{}, truncate:true})
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

module.exports = {
    insertTPS,
    getTPSById,
    getAllTPS,
    updateTPS,
    deleteTPS,
    deleteAllTPS,
    getTPSByDapil,
    getTPSByWilayah,
    getTPSByKandidat,
    getTPSAll,
    getTPSandSuaraByKandidat
};
