const express = require('express');
const UserModel = require("../models/User");
const { body, query, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const router = express.Router();

const JWT_SECRET = 'WeLoveCustomers';

//ROUTE 1: Create a User using: POST "/api/auth/signup". Doesn't require Auth
router.post('/signup', [
    //using validation through express-validator
    body('name', 'Enter a Name').notEmpty(),
    body('email', 'Enter a valid Email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    try {
        const result = validationResult(req);//Checking if all inputs are valid or not
        if (result.isEmpty()) {
            const user = await UserModel.findOne({ email: req.body.email });//Checking if a user with this email exists or not
            if (user) {
                return res.status(401).json({ error: 'The user with this email already exists..' });
            }
            else {

                //Securing password
                const salt = await bcrypt.genSalt(10);
                const securedPassword = await bcrypt.hash(req.body.password, salt);

                //Creating user if the user with this email id doesn't exists
                const user = await UserModel.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: securedPassword
                });

                console.log(user);

                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);
                console.log(authToken);
                return res.status(201).json({ authToken });
                // return res.status(201).json({ msg: "Success" });
            }
        }
        else {
            return res.status(401).json({ errors: result.array() });//Throing error if any input is not valid
        }
    } catch (error) {//Throwing error if any exception occurs
        console.log('Some error occured', error);
        res.status(500).send(error);
    }
})

//ROUTE 2: Authenticate a User using: POST "/api/auth/login". Doesn't require Auth

router.post('/login', [//using validation through express-validator
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Please enter your password').exists()
], async (req, res) => {
        
    const result = validationResult(req);//Checking if all inputs are valid or not
    if (!result.isEmpty()) {
        return res.status(401).json({ errors: result.array() });//Throing error if any input is not valid
    }

    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).send('Please try to login with correct credentials');
        }
        else {
            const compPassword = await bcrypt.compare(password, user.password);
            if (!compPassword) {
                return res.status(401).send('Please try to login with correct credentials');
            }
            else {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);
                console.log(authToken);
                return res.status(201).json({ authToken });
            }
        }

    } catch (error) {
        console.log('Some error occured', error);
        res.status(500).send('Internal server occured');
    }

})

//ROUTE 3: Authenticate a User using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchUser, async (req, res) => {
    
    try {
        const userId = req.user.id;
        const user = await UserModel.findById(userId).select("-password");
        return res.send(user);
    } catch (error) {
        console.log('Some error occured', error);
        res.status(500).send('Internal server occured');
    }
})

module.exports = router;