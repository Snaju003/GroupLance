const jwt = require('jsonwebtoken');

const JWT_SECRET = 'WeLoveCustomers';

const fetchUser = (req, res, next) => {

    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.sendStatus(401).send('Please authenticate using a valid token');
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.send(401).send('Please authenticate using a valid token');
    }

}

module.exports = fetchUser;