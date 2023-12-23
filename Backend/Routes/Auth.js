const express = require('express');
const {
    signup,
    login,
    activateUser,
    deactivateUser,
    updateAccessToken,
    logout
} = require('../controllers/auth');
const { body } = require('express-validator');
const fetchUser = require('../middleware/fetchuser');

const authRouter = express.Router();


//ROUTE 1: Create a User using: POST "/api/auth/signup". Doesn't require Auth
authRouter.post('/signup', [
    //using validation through express-validator
    body('name', 'Enter a Name').notEmpty(),
    body('email', 'Enter a valid Email').isEmail(),
    body('password').isLength({ min: 5 })
], signup);

//ROUTE 2: Authenticate a User using: POST "/api/auth/login". Doesn't require Auth

authRouter.post('/login', [//using validation through express-validator
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Please enter your password').exists()
], login);

//ROUTE 3: Get OTP: POST
authRouter.post('/verify-otp', activateUser);

authRouter.delete('/deactivate-user', fetchUser, deactivateUser);
authRouter.get('/refresh', updateAccessToken);
authRouter.get('/logout', fetchUser, logout);

module.exports = authRouter;