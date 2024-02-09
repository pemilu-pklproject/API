const { Dapil, Calon_jabatan } = require("../database/models")

const getAllDapil = async (req, res) => {
    try {
        const calonJabatan = await Calon_jabatan.findAll({ 
            attributes: ['jabatan'],
            where: { id: req.params.id_jabatan }
        });

        if (calonJabatan.length === 0) {
            return res.status(404).json({ status: false, message: "Id Jabatan not found" });
        }

        const jenisJabatan = calonJabatan[0].jabatan;

        const dapil = await Dapil.findAll({ where: { jenis_dapil: jenisJabatan } });

        res.json(dapil);
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: "Server Error" });
    }
};


module.exports = {
    getAllDapil
}