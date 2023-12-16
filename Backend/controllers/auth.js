const UserModel = require("../models/User");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, res) => {
    try {
        const result = validationResult(req);//Checking if all inputs are valid or not
        if (result.isEmpty()) {
            const { name, email, password } = req.body;
            const user = await UserModel.findOne({ email: email });//Checking if a user with this email exists or not
            if (user) {
                return res.status(401).json({ error: 'The user with this email already exists..' });
            }
            else {

                //Securing password
                const salt = await bcrypt.genSalt(10);
                const securedPassword = await bcrypt.hash(password, salt);
                //Creating user if the user with this email id doesn't exists
                const user = await UserModel.create({
                    name: name,
                    email: email,
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
}

const login = async (req, res) => {

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

}

const getUser = async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await UserModel.findById(userId).select("-password");
        return res.send(user);
    } catch (error) {
        console.log('Some error occured', error);
        res.status(500).send('Internal server occured');
    }
}

module.exports = { signup, login, getUser };