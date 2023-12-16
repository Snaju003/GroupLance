const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const { signup, login, getUser } = require('../controllers/auth');
const { body } = require('express-validator');

const authRouter = express.Router();


//ROUTE 1: Create a User using: POST "/api/auth/signup". Doesn't require Auth
authRouter.post('/signup', [
    //using validation through express-validator
    body('name', 'Enter a Name').notEmpty(),
    body('email', 'Enter a valid Email').isEmail(),
    body('password').isLength({ min: 5 })
], signup)

//ROUTE 2: Authenticate a User using: POST "/api/auth/login". Doesn't require Auth

authRouter.post('/login', [//using validation through express-validator
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Please enter your password').exists()
], login)

//ROUTE 3: Authenticate a User using: POST "/api/auth/getuser". Login required
authRouter.get('/getuser/:id', fetchUser,getUser);

module.exports = authRouter;