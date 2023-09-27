const SECRET = "jwtSecretfor-todoApp"



const authenticate = async (req,res,next)=>{
  const token = req.headers.authorization.split(' ')[1]; 
  //Authorization: 'Bearer TOKEN'

  if (token){
    jwt.verify(token, SECRET, (err, user)=>{
      if (err){
        return res.status(404).json({message: "Authentication Failed!"})
      }
      req.user = user;
      next();
    });
  }
  else{
    res.status(404).json({message: "Token not provided!"})
  }
};

module.exports = {authenticate, SECRET}