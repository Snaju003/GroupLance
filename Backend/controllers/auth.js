const UserModel = require("../models/User");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ejs = require('ejs');
const path = require('path');
const sendMail = require("../utils/sendmail");
const { getActivationToken } = require("../utils/activationToken");
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
                const user = {
                    name: name,
                    email: email,
                    password: securedPassword
                };

                const accountActivationToken = getActivationToken(user);
                const activationCode = accountActivationToken.activationCode;

                const data = {
                    user: {
                        name: user.name,
                    },
                    activationCode
                };

                const html = await ejs.renderFile(path.join(__dirname, '../mails/otp_verification_mail.ejs'), data);

                try {
                    await sendMail({
                        email: user.email,
                        subject: 'Activate your Account',
                        template: 'otp_verification_mail.ejs',
                        data
                    });

                    return res.status(200).json({
                        success: true,
                        message: `Activation mail sent to ${user.email}`,
                        activationToken: accountActivationToken.token
                    });
                } catch (error) {
                    return res.status(401).json({
                        success: false,
                        message: 'Failed to send message'
                    });
                }
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
                const getUser = await UserModel.findById(user.id).select('-password');
                return res.status(201).json({ success: true, message: 'Login successful', getUser, authToken });
            }
        }

    } catch (error) {
        console.log('Some error occured', error);
        res.status(500).send('Internal server occured');
    }

}

const activateUser = async (req, res) => {
    try {
        const { activationCode, activationToken } = req.body;
        if (!activationCode || !activationToken) {
            return res.status(400).json({
                success: false,
                message: 'Please provide correct information',
            });
        }
        const newUser = jwt.verify(activationToken, JWT_SECRET);

        if (newUser.activationCode !== activationCode) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Activation code',
            });
        }

        const { name, email, password } = newUser.user;
        const existingUser = await UserModel.findOne({ email: email });//Checking if a user with this email exists or not
        if (existingUser) {
            return res.status(401).json({ error: 'The user with this email already exists..' });
        }
        const user = await UserModel.create({
            name: name,
            email: email,
            password: password
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        return res.status(200).json({
            success: true,
            message: 'User Created successfully',
            user,
            authToken
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

const deactivateUser = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId || userId === '') {
            return res.status(400).json({
                success: false,
                message: 'Please enter required fields'
            });
        }

        await UserModel.findByIdAndDelete(userId);
        return res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

module.exports = {
    signup,
    login,
    activateUser,
    deactivateUser
};