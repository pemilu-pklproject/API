const { Super_admin } = require("../database/models")
const { decrypt, encrypt } = require('../helper/bcrypt');

//insert admin
const insertAdmin = async (req, res) => {
    const { password } = req.body;
    req.body.password = encrypt(password);

    Super_admin
        .create(req.body)
        .then(()=>{ res.json({ status:true , message: "data input success"})})
        .catch(err=>{
            console.log(err)
            res.statusCode=500
            res.send("server error")
        })
};

//get all admin
const getAllAdmin = async (req,res) =>{
    Super_admin
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

//get admin by Id
const getAdminById = async (req, res) => {
    Super_admin
        .findAll({ where: { id: req.params.id } })
        .then((data) => {
            if(data.length == 0) {
                return res.status(404).json({status: false, message: "id admin not found"})}
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send("Server Error")
        })
};

//update admin
const updateAdmin = async (req, res) => {
    Super_admin
    .update(req.body, { where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'data update success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

//delete admin
const deleteAdmin = async (req, res) => {
    Super_admin
    .destroy({ where: { id: req.params.id } })
    .then(() => res.json({ status: true, message: 'delete data success' }))
    .catch(err => {
        console.log(err)
        res.statusCode = 500
        res.send("Server Error")
    })
  };

module.exports = {
    insertAdmin,
    getAllAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin
}