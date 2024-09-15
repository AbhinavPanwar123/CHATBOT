const { generateToken } = require("../middleware/authToken");
const userModel = require("../models/userModel");
const hashPassword = require("../utils/bcrypt");
const decryptPassword = require("../utils/decrypt");

//Register
exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingCustomer = await userModel.findOne({ email });
    if (existingCustomer) {
      return res.status(400).send("Customer is already exists");
    }

    //Password Hashing
    const hashedPassword = await hashPassword(password);

    const customer = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await customer.save();

    return res
      .status(200)
      .send({ success: true, message: "Customer Registered Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

//Login
exports.loginController = async (req,res) => {
    const { email, password } = req.body;

    try {
      const customer = await userModel.findOne({ email });
      if (!customer) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
      const isMatch = await decryptPassword(password, customer.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
    //Token
    const token = generateToken(customer._id);  

      res.status(200).json({
        success: true,
        message: "Login Successful",
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
};

//Logout
exports.logoutController = async (req,res) => {
    res.clearcookie()
};
