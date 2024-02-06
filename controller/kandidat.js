const { Kandidat } = require("../database/models")

//insert kandidat
const insertKandidat = async (req, res) => {
    Kandidat
        .create(req.body)
        .then(()=>{ res.json({ status:true, message: "data input success"})})
        .catch(err=>{
            console.log(err)
            res.statusCode=500
            res.send("server error")
        })
};

//getAllKandidat
const getAllKandidat = async (req,res) =>{
    Kandidat
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
}

//get kandidat by Id
const getKandidatById = async (req, res) => {
    Kandidat
        .findAll({ where: { id: req.params.id } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id kandidat not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//update kandidat
const updateKandidat = async (req, res) => {
    Kandidat
    .update(req.body, { where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'data update success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete kandidat
const deleteKandidat = async (req, res) => {
    Kandidat
    .destroy({ where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete all kandidat
const deletAllKandidat = async (req, res) => {
    Kandidat
    .destroy({ where:{}, truncate:true })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };


module.exports = {
    insertKandidat,
    getAllKandidat,
    getKandidatById,
    updateKandidat,
    deleteKandidat,
    deletAllKandidat
}