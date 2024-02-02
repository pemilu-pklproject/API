const { Kandidats } = require("../models")

//insert kandidat
const insertKandidat =  (req, res) => {
    Kandidats
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
    Kandidats
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

module.exports = {
    insertKandidat,
    getAllKandidat
}