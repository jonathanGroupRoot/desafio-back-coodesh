const jwt = require("jsonwebtoken");
const { api_key } = require("../key/key.json");

module.exports = (req,res,next) => {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).json({Token: "Token is missing"});
    }

    const [, token] = authToken.split(" ");

    try {
        jwt.verify(token, api_key);
        return next();
    }catch(error) {
        return res.status(401).json({
            token: "Token Inválido"
        })
    }        
   
}