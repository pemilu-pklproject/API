const { Pemilih, Relawan, TPS, Wilayah, Sequelize } = require("../database/models")

//insert pemilih
const insertPemilih = async (req, res) => {
    Pemilih
    .create(req.body)
    .then(()=>{ res.json({ status:true, message: "data input success"})})
    .catch(err=>{
        console.log(err)
        res.statusCode=500
        res.send("server error")
    })
};

//get all pemilih
const getAllPemilih = async (req, res) =>{
    Pemilih
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

//get pemilih by Id
const getPemilihById = async (req, res) => {
    Pemilih
        .findAll({ where: 
            { 
                id: req.params.id 
            },
            include: [
                {
                    model: Relawan,
                    as:'relawan',
                    attributes:['nama']
                },
                {
                    model: TPS,
                    as:'tps_pemilih',
                    attributes:['id','nomor','nama_kpps','alamat']
                },
                {
                    model: Wilayah,
                    as:'pemilih_wilayah',
                    attributes:[[Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 2 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 2) = SUBSTRING(pemilih_wilayah.kode, 1, 2) LIMIT 1
                            )
                        END
                    )`), 'nama_provinsi'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 5 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 5) = SUBSTRING(pemilih_wilayah.kode, 1, 5) LIMIT 1
                            )
                        END
                    )`), 'nama_kabupaten'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 8 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 8) = SUBSTRING(pemilih_wilayah.kode, 1, 8) LIMIT 1
                            )
                        END
                    )`), 'nama_kecamatan'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 13 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 13) = SUBSTRING(pemilih_wilayah.kode, 1, 13) LIMIT 1
                            )
                        END
                    )`), 'nama_desa']]
    
                },
            ] })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id pemilih not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//get pemilih by kandidat
const getPemilihByKandidat = async (req, res) => {
    const kandidat = req.params.id_kandidat
    Pemilih
        .findAll({ 
            where: 
            { 
                id_kandidat: kandidat
            },
            include: [
                {
                    model: Relawan,
                    as:'relawan',
                    attributes:['nama']
                },
                {
                    model: TPS,
                    as:'tps_pemilih',
                    attributes:['id','nomor','nama_kpps','alamat']
                },
                {
                    model: Wilayah,
                    as:'pemilih_wilayah',
                    attributes:[[Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 2 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 2) = SUBSTRING(pemilih_wilayah.kode, 1, 2) LIMIT 1
                            )
                        END
                    )`), 'nama_provinsi'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 5 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 5) = SUBSTRING(pemilih_wilayah.kode, 1, 5) LIMIT 1
                            )
                        END
                    )`), 'nama_kabupaten'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 8 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 8) = SUBSTRING(pemilih_wilayah.kode, 1, 8) LIMIT 1
                            )
                        END
                    )`), 'nama_kecamatan'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 13 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 13) = SUBSTRING(pemilih_wilayah.kode, 1, 13) LIMIT 1
                            )
                        END
                    )`), 'nama_desa']]
    
                },
            ]
        })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id pemilih not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//get pemilih by relawan
const getPemilihByRelawan = async (req, res) => {
    const relawan = req.params.id_relawan
    Pemilih
        .findAll({ 
            where: 
            { 
                id_relawan: relawan 
            },
            include: [
                {
                    model: Relawan,
                    as:'relawan',
                    attributes:['nama']
                },
                {
                    model: TPS,
                    as:'tps_pemilih',
                    attributes:['id','nomor','nama_kpps','alamat']
                },
                {
                    model: Wilayah,
                    as:'pemilih_wilayah',
                    attributes:[[Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 2 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 2) = SUBSTRING(pemilih_wilayah.kode, 1, 2) LIMIT 1
                            )
                        END
                    )`), 'nama_provinsi'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 5 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 5) = SUBSTRING(pemilih_wilayah.kode, 1, 5) LIMIT 1
                            )
                        END
                    )`), 'nama_kabupaten'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 8 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 8) = SUBSTRING(pemilih_wilayah.kode, 1, 8) LIMIT 1
                            )
                        END
                    )`), 'nama_kecamatan'],
                    [Sequelize.literal(`(
                        CASE
                            WHEN LENGTH(kode) >= 13 THEN (
                                SELECT nama FROM wilayah WHERE SUBSTRING(kode, 1, 13) = SUBSTRING(pemilih_wilayah.kode, 1, 13) LIMIT 1
                            )
                        END
                    )`), 'nama_desa']]
    
                },
            ]
         })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id pemilih not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//get pemilih by tps
const getPemilihByTPS = async (req, res) => {

    const tps = req.params.id_tps
    Pemilih
        .findAll({ where: { id_tps: tps } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id pemilih not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};


//update pemilih
const updatePemilih = async (req, res) => {
    Pemilih
    .update(req.body, { where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'data update success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete pemilih
const deletePemilih = async (req, res) => {
    Pemilih
    .destroy({ where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete all pemilih
const deleteAllPemilih = async (req, res) => {
    Pemilih
    .destroy({ where:{}, truncate:true})
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

module.exports = {
    insertPemilih,
    getPemilihById,
    getAllPemilih,
    updatePemilih,
    deletePemilih,
    deleteAllPemilih,
    getPemilihByKandidat,
    getPemilihByRelawan,
    getPemilihByTPS
};
