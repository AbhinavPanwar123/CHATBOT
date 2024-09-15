const { validationResult, body } = require("express-validator");

const userValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
    } else {
        return res.status(400).send({ message: errors.errors[0].msg });
    }
};

const CheckCustomer = [
    // Validate 'username'
    body('username')
        .trim()
        .isString().withMessage("Username must be a string")
        .isLength({ min: 4 }).withMessage("Username must be at least 4 characters long")
        .notEmpty().withMessage("Username is required"),

    // Validate 'email'
    body('email')
        .trim()
        .isEmail().withMessage("Invalid email format")
        .notEmpty().withMessage("Email is required"),

    // Validate 'password'
    body('password')
        .optional() 
        .trim()
        .isLength({ min: 6, max: 10 }).withMessage("Password must be between 6 and 10 characters long")
        .isStrongPassword({
            minLength: 6, 
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }).withMessage("Password must contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol"),

    // Validate 'customerid' (optional)
    body('customerid')
        .optional()
        .trim()
        .isString().withMessage("Customer ID must be a string"),

    // Validate 'subscription' (optional)
    body('subscription')
        .optional()
        .trim()
        .isString().withMessage("Subscription must be a string"),

     userValidation
];

module.exports = CheckCustomer;
