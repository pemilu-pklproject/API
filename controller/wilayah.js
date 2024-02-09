const { Wilayah } = require("../database/models")
const { Op, Sequelize } = require('sequelize');

const getAllProvinsi = async (req,res) =>{
    Wilayah
    .findAll({
        where: {
            kode: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('LENGTH', Sequelize.col('kode')), 2)
                ]
            }
        }
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
}

const getKabupatenById = async (req, res) => {
    const id = req.params.id_provinsi
    const prefix = id.toString().substring(0, 2);

    Wilayah
    .findAll({
        where: {
            kode: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('LENGTH', Sequelize.col('kode')), 5),
                    Sequelize.where(Sequelize.fn('LEFT', Sequelize.col('kode'), 2), prefix) 
                ]
            }
        }
    })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id provinsi not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};


const getKecamatanById = async (req, res) => {
    const id = req.params.id_kab_kota
    const prefix = id.toString().substring(0, 5);

    Wilayah
    .findAll({
        where: {
            kode: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('LENGTH', Sequelize.col('kode')), 8),
                    Sequelize.where(Sequelize.fn('LEFT', Sequelize.col('kode'), 5), prefix) 
                ]
            }
        }
    })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id kabupaten/kota not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

const getDesaById = async (req, res) => {
    const id = req.params.id_kecamatan
    const prefix = id.toString().substring(0, 8);

    Wilayah
    .findAll({
        where: {
            kode: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('LENGTH', Sequelize.col('kode')), 13),
                    Sequelize.where(Sequelize.fn('LEFT', Sequelize.col('kode'), 8), prefix) 
                ]
            }
        }
    })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id kecamatan not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};


module.exports = {
    getAllProvinsi,
    getKabupatenById,
    getKecamatanById,
    getDesaById
}