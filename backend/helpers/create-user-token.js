const jwt = require('jsonwebtoken');

const createUserToken = async (user, req, res, {message})=>{
    //create a token
    const token = jwt.sign({
        id:user.id,
        name:user.name
    },'nosso_secret')
    //return token
    res.status(200).json({
        message:message,
        token:token,
        userId:user.id
    })
}
module.exports = createUserToken