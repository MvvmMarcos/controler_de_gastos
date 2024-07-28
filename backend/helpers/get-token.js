const getToken =  (req) =>{
    const authHeader = req.headers['authorization'];
    // console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    return token;
}
module.exports = getToken