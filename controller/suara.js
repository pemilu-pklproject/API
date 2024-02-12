const { Hasil_suara } = require("../database/models")

//insert HasilSuara
const insertHasilSuara = async (req, res) => {
    const dokumen = req.files['dokumen'][0];
    req.body.document = dokumen.filename

    Hasil_suara
        .create(req.body)
        .then(()=>{ res.json({ status:true, message: "data input success"})})
        .catch(err=>{
            console.log(err)
            res.statusCode=500
            res.send("server error")
        })
};

//getAllHasilSuara
const getAllHasilSuara = async (req,res) =>{
    Hasil_suara
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

//get HasilSuara by Id
const getHasilSuaraById = async (req, res) => {
    Hasil_suara
        .findAll({ where: { id: req.params.id } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id Hasil Suara not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//update HasilSuara
const updateHasilSuara = async (req, res) => {
    Hasil_suara
    .update(req.body, { where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'data update success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete HasilSuara
const deleteHasilSuara = async (req, res) => {
    Hasil_suara
    .destroy({ where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete all HasilSuara
const deletAllHasilSuara = async (req, res) => {
    Hasil_suara
    .destroy({ where:{}, truncate:true })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };


module.exports = {
    insertHasilSuara,
    getAllHasilSuara,
    getHasilSuaraById,
    updateHasilSuara,
    deleteHasilSuara,
    deletAllHasilSuara
}