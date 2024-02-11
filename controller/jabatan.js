const { Calon_jabatan } = require("../database/models")

//get all jabatan
const getAllJabatan = async (req, res) =>{
    Calon_jabatan
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

//get jabatan by Id
const getJabatanById = async (req, res) => {
    Calon_jabatan
        .findAll({ where: { id: req.params.id } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id jabatan not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};


module.exports = {
    getAllJabatan,
    getJabatanById
};
