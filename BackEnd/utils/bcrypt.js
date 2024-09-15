const bcrypt  = require('bcrypt');

const hashPassword = async(password)=>{
    try {
        const hashedPassword = await bcrypt.hash(password,12)
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};
module.exports = hashPassword;