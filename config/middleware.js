const jwt = require('jsonwebtoken');

const VerifyUser = (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.replace("Bearer ","")
        if (!token) console.log(authHeader);

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) return res.status(401).json({msg: "Invalid Token"})
            req.user = decoded;
            next()
        })
    }

const Logout = (req, res) => {
        res.clearCookie('access_token');
        res.status(200).json({ msg: 'Logout berhasil' });
      }


module.exports = { VerifyUser, Logout}
