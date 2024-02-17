const { Relawan, Kandidat } = require("../database/models")
const { encrypt } = require('../helper/bcrypt');

//insert Relawan
const insertRelawan = async (req, res) => {
    const { password } = req.body;
    req.body.password = encrypt(password);

    Relawan
    .create(req.body)
    .then(()=>{ res.json({ status:true, message: "data input success"})})
    .catch(err=>{
        console.log(err)
        res.statusCode=500
        res.send("server error")
    })
};

//get all Relawan
const getAllRelawan = async (req, res) =>{
    Relawan
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


const getRelawanAll = async (req, res) =>{
    Relawan
    .findAll({
        include: [
            {
                model: Kandidat,
                as: 'candidate'
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


//get relawan by kandidat
const getRelawanByKandidat = async (req, res) =>{
    const id = req.params.id_kandidat

    Relawan
    .findAll({ where : {id_kandidat: id } })
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

//get saksi
const getSaksiByKandidat = async (req, res) =>{
    const id = req.params.id_kandidat

    Relawan
    .findAll({
        where: { isSaksi: true, id_kandidat: id }
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

//get Relawan by Id
const getRelawanById = async (req, res) => {
    Relawan
        .findAll({ where: { id: req.params.id } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id relawan not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//update Relawan
const updateRelawan = async (req, res) => {
    const { password } = req.body;
    req.body.password = encrypt(password);
    
    Relawan
    .update(req.body, { where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'data update success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete Relawan
const deleteRelawan = async (req, res) => {
    Relawan
    .destroy({ where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete all Relawan
const deleteAllRelawan = async (req, res) => {
    Relawan
    .destroy({ where:{}, truncate:true})
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

module.exports = {
    insertRelawan,
    getRelawanById,
    getAllRelawan,
    updateRelawan,
    deleteRelawan,
    deleteAllRelawan,
    getRelawanByKandidat,
    getSaksiByKandidat,
    getRelawanAll
};
