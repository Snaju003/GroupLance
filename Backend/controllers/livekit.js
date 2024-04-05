const { AccessToken } = require("livekit-server-sdk");
require("dotenv").config();

const createToken = async () => {
    const roomName = 'quickstart-room';
    const participantName = 'quickstart-username';

    const at = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
        identity: participantName,
        ttl: '10m',
    });
    at.addGrant({ roomJoin: true, room: roomName });

    return await at.toJwt();
}

module.exports = {
    createToken
};