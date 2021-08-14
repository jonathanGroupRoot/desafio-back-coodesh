module.exports = (req,res,next) => {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(400).json({Token: "Token is missing"});
    }

    const [, token] = authToken.split(" ");

    try {
        if(token === "coodesh")
        return next();
    }catch(error) {
        return res.status(401).json({
            token: "Token Inválido"
        })
    }       
   
}