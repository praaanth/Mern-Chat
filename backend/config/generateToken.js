const jwt= require('jsonwebtoken');
//  assigning a secret key to the token when the user is created
const generateToken= (id)=>{
    const token=jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
    return token;
}
module.exports={generateToken};
