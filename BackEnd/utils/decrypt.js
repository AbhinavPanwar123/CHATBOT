const bcrypt = require('bcrypt');

const decryptPassword = async(password,hashedPassword)=>{
    try {
        return await bcrypt.compare(password,hashedPassword);
    } catch (error) {
        console.log(error);
    }
};
module.exports = decryptPassword;