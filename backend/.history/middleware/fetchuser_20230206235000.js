var jwt = require('jsonwebtoken');
const JWT_SECRET = "Sahilisagoodboy";
const fetchuser = (req, res, next)=> {
    //Get the user from the jwt token and add id to req object
    
    const token = req.header('auth-token')
    if(!token) {
        res.status(401).send({error: "please authenticate using a valid token"})
    }
    const string = jwt.verify(token, )
    next()
}

module.exports = fetchuser;