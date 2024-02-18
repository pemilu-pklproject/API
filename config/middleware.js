const jwt = require('jsonwebtoken')

module.exports = {
    verifyUser: (req, res, next) => {
        console.log(req.cookies)
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.replace("Bearer ", "")

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
            if (err) return res.status(401).json({msg: "Invalid Token"})
            // if(decode.role == "user") return res.sendStatus(403)
            next()
        })
    },

    Logout: (req, res) => {
        res.clearCookie('access_token');
        res.status(200).json({ msg: 'Logout berhasil' });
      }
}