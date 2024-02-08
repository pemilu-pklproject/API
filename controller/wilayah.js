const { Wilayah } = require("../database/models")

const getAllWilayah = async (req,res) =>{
    Wilayah
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

const getWilayahById = async (req, res) => {
    Wilayah
        .findAll({ where: { kode: req.params.id } })
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
    getAllWilayah,
    getWilayahById
}