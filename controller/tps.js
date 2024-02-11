const { TPS } = require("../database/models")

//insert TPS
const insertTPS = async (req, res) => {

    TPS
    .create()
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

//get TPS by Id
const getTPSById = async (req, res) => {
    TPS
        .findAll({ where: { id: req.params.id } })
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
    deleteAllTPS
};
