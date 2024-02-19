const jwt = require('jsonwebtoken')

module.exports = {
    verifyUser: (req, res, next) => {
        // console.log(req.cookies)
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.replace("Bearer ","")
        if (!token) console.log('token tidak ditemukan');

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) return res.status(401).json({msg: "Invalid Token"})
            req.user = decoded;
            next()
        })
    },

    Logout: (req, res) => {
        res.clearCookie('access_token');
        res.status(200).json({ msg: 'Logout berhasil' });
      }
}