const { TPS, Dapil, Relawan, Wilayah } = require("../database/models");
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
                model: Dapil,
                as: 'tps-dapil',
                attributes: ['nama']
            },
            {
                model: Wilayah,
                as:'tps-wilayah',
                attributes:['nama']

            },
            {
                model: Relawan,
                as:'saksi',
                attributes:['nama']

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
                    model: Dapil,
                    as: 'tps-dapil',
                    attributes: ['nama']
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

//get tps by id kandidat
const getTPSByKandidat = async (req, res) => {
    const kandidat = req.params.id_kandidat
    TPS
        .findAll({ where: { id_kandidat: kandidat } })
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
    getTPSAll
};
