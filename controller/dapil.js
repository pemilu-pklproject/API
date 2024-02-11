const { Dapil, Calon_jabatan } = require("../database/models");
const { Op, Sequelize } = require('sequelize');

const getAllDapil = async (req, res) => {
    const id_jabatan = req.params.id_jabatan;
    const id_dapil = req.params.id_dapil;
    const prefix = id_dapil.toString().substring(0, 2);

    try {
        const calonJabatan = await Calon_jabatan.findOne({
            where: { id: id_jabatan }
        });

        if (!calonJabatan) {
            return res.status(404).json({ status: false, msg: 'id jabatan not found' });
        }

        const jenisDapil = calonJabatan.jabatan;

        const dapil = await Dapil.findAll({
            where: {
                jenis_dapil: jenisDapil,
                kode_dapil: {
                    [Op.and]: [
                        Sequelize.where(Sequelize.fn('LEFT', Sequelize.col('kode_dapil'), 2), prefix) 
                    ]
                }
            }
        });

        if (!dapil || dapil.length === 0) {
            return res.status(404).json({ status: false, msg: 'dapil not found' });
        }
        // if(dapil.kode_dapil>1){
        //     dapil.kode_dapil = kode_dapil
        // }
        res.json(dapil);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    getAllDapil
};
