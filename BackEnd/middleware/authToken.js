const JWT = require('jsonwebtoken');


//SIGN TOKEN
const getSignedToken = function (res) {
    const generateToken = JWT.sign(
        { customerid },
        'mysecretkey',  
        { expiresIn: '30min' });

    const refreshToken = JWT.sign(
        { customerid },
        'myrefreshtoken', 
        { expiresIn: '3d' }
    );

    res.cookie("refreshToken", `${refreshToken}`, {
        maxAge: 60 * 60 * 24 * 7 * 1000, 
        httpOnly: true,                  
        secure: process.env.NODE_ENV === 'production',  
        sameSite: 'strict',              
        path: '/' 
    });
  };


module.exports = getSignedToken;
