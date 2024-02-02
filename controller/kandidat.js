const { Kandidat } = require("../models")

//insert kandidat
const insertKandidat =  (req, res) => {
    Kandidat
        .create(req.body)
        .then(()=>{ res.json({ status:true, message: "data berhasil input"})})
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
            res.status=200
            res.json(datas)
        })
        .catch(err =>{
            console.log(err)
            res.status=500
            res.send("server error")
        })
}

const getKandidatById = (req, res) => {
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


module.exports = {
    insertKandidat,
    getAllKandidat,
    getKandidatById
}