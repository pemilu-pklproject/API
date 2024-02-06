const { Super_admin, Kandidat, Relawan } = require('../database/models');
const { decrypt } = require('../helper/bcrypt');
const jwt = require('jsonwebtoken')

const authLogin = async (req, res) => {
    // console.log(req.body)
    const { username, password } = req.body

    Super_admin
        .findAll({ where: { username } })
        .then(data => {
            if (data.length == 0) return res.status(401).json({status: false, msg: 'Username salah' });

            decrypt(password, data[0].password, (match) => {
                if (!match) { 
                    return res.status(401).json({ status: false, msg: 'Password salah' })
                };

                const { id, email, nama } = data[0];
                const access_token = jwt.sign({ id, email, nama }, process.env.ACCESS_TOKEN, { expiresIn: '600s' });
                const refresh_token = jwt.sign({ id, email, nama }, process.env.REFRESH_TOKEN, { expiresIn: '90d' });
    
                return res.json({status: true, access_token, refresh_token });
            });
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send('Server Error');
        })
}

const kandidatLogin = async (req, res) => {
    // console.log(req.body)
    const { nik, password } = req.body

    Kandidat
        .findAll({ where: { nik } })
        .then(data => {
            if (data.length == 0) return res.status(401).json({status: false, msg: 'Username salah' });

            decrypt(password, data[0].password, (match) => {
                if (!match) { 
                    return res.status(401).json({ status: false, msg: 'Password salah' })
                };

                const { id, email, nama } = data[0];
                const access_token = jwt.sign({ id, email, nama }, process.env.ACCESS_TOKEN, { expiresIn: '600s' });
                const refresh_token = jwt.sign({ id, email, nama }, process.env.REFRESH_TOKEN, { expiresIn: '90d' });
    
                return res.json({status: true, access_token, refresh_token });
            });
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send('Server Error');
        })
}
const KandidatRegister =  (req, res) => {
    Kandidat
    .create(req.body)
    .then(() => res.status(201).json({ status: true, msg: 'Registrasi berhasil' }))
    .catch((err) => {
        console.error(err);
        res.statusCode = 500;
        res.send('Server Error');
    });
}

module.exports = {authLogin, KandidatRegister, kandidatLogin}