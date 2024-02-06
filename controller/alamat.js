const { Alamat } = require("../database/models")

//insert Alamat
const insertAlamat = async (req, res) => {
    Alamat
        .create(req.body)
        .then(()=>{ res.json({ status:true, message: "data input success"})})
        .catch(err=>{
            console.log(err)
            res.statusCode=500
            res.send("server error")
        })
};

//update Alamat
const updateAlamat = async (req, res) => {
    Alamat
    .update(req.body, { where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'data update success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

module.exports = {
    insertAlamat,
    updateAlamat,
}