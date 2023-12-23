const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXPIRE || '300', 10);
const accessTokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge: accessTokenExpire * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax'
};

const refreshTokenExpire = parseInt(process.env.REFRESH_TOKEN_EXPIRE || '1200', 10);
const refreshTokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax'
};

const sendToken = (user, res) => {

    const accessToken = user.SignAccessToken();
    const refreshToken = user.SignRefreshToken();


    // if (typeof localStorage === "undefined" || localStorage === null) {
    //     const LocalStorage = require('node-localstorage').LocalStorage;
    //     localStorage = new LocalStorage('./scratch');
    // }

    // localStorage.setItem(user._id, JSON.stringify(user) as any);
    // console.log(localStorage.getItem(user._id));

    // Only set secure to true for production purpose
    if (process.env.NODE_DEV) {
        accessTokenOptions.secure = true;
    }

    res.cookie("access_token", accessToken, accessTokenOptions);
    res.cookie("refresh_token", refreshToken, refreshTokenOptions);
    return { accessToken, refreshToken };
}

module.exports = {
    accessTokenExpire,
    accessTokenOptions,
    refreshTokenExpire,
    refreshTokenOptions,
    sendToken,
};