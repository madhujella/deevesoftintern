var jwt = require('jsonwebtoken');

module.exports.isLogin = function(req, res, next){
    try {
        var token = req.headers.authorization.split(' ')[1];
        var verify = jwt.verify(token, '123', function(err, decoded){
            if(decoded){
                next();
            } else {
                res.status(401).json({message: "Login in"})
            }
        })
    } catch (e){
        res.status(401).json({message: "Login in"})        
    }
    
}

module.exports.validUser = function(req, res, next){
    try{
        var token = req.headers.authorization.split(" ")[1];
        var verify = jwt.verify(token, "123", function(err, decoded){
            if(decoded && decoded.user === req.params.user){
                console.log(req.params.user);
                next();
            }else {
        res.status(401).json({message: "unauthorized"})        
        
            }
        })
    } catch(e){
        res.status(401).json({message: "unauthorized"})               
    }
}