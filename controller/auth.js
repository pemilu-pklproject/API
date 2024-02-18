const { Super_admin, Kandidat, Relawan } = require('../database/models');
const jwt = require('jsonwebtoken');
const { decrypt, encrypt } = require('../helper/bcrypt');

//login admin
const authLogin = async (req, res) => {
    // console.log(req.body)
    const { email , password } = req.body

    Super_admin
        .findAll({ where: { email : email } })
        .then(data => {
            if (data.length == 0) return res.status(401).json({status: false, msg: 'Username tidak dikenal' });

            decrypt(password, data[0].password, (match) => {
                if (!match) { 
                    return res.status(401).json({ status: false, msg: 'Password salah!' })
                };

                const { id, email, nama } = data[0];
                const access_token = jwt.sign({ id, email, nama }, process.env.ACCESS_TOKEN, { expiresIn: '600s' });
    
                return res.json({status: true, user : { id: id, nama: nama }, access_token});
            });
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send('Server Error');
        })
}

//login kandidat
const kandidatLogin = async (req, res) => {
    const { nik, password } = req.body;

    Kandidat
    .findAll({ where: { nik } })
        .then(data => {
            if (data.length == 0) return res.status(401).json({status: false, msg: 'Username tidak dikenal' });

            decrypt(password, data[0].password, (match) => {
                if (!match) { 
                    return res.status(401).json({ status: false, msg: 'Password salah' })
                };

                const { id, email, nama, nik } = data[0];
                const access_token = jwt.sign({ id, email, nama, nik }, process.env.ACCESS_TOKEN, { expiresIn: '600s' });
                const refresh_token = jwt.sign({ id, email, nama, nik }, process.env.REFRESH_TOKEN, { expiresIn: '90d' });
    
                return res.json({status: true, user: { id: id, nama: nama }, access_token, refresh_token });
            });
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send('Server Error');
        })
}


//login relawan
const RelawanLogin = async (req, res) => {
    const { nik, password } = req.body;

    Relawan
    .findAll({ where: { nik: nik } })
        .then(data => {
            if (data.length == 0) return res.status(401).json({status: false, msg: 'nik tidak ditemukan' });

            decrypt(password, data[0].password, (match) => {
                if (!match) { 
                    return res.status(401).json({ status: false, msg: 'Password salah' })
                };

                const { id, email, nama, nik } = data[0];
                const access_token = jwt.sign({ id, email, nama, nik }, process.env.ACCESS_TOKEN, { expiresIn: '600s' });
                const refresh_token = jwt.sign({ id, email, nama, nik }, process.env.REFRESH_TOKEN, { expiresIn: '90d' });
    
                return res.json({status: true, user: { id: id, nama: nama }, access_token, refresh_token });
            });
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send('Server Error');
        })
}

module.exports = {
    authLogin, 
    kandidatLogin, 
    RelawanLogin,
    // AdminRegister,
}