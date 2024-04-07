// const { AccessToken } = import("livekit-server-sdk");// Read this doc -> https://nodejs.org/api/crypto.html
require("dotenv").config();

const createToken = async (room, participant) => {
    const { AccessToken } = await import("livekit-server-sdk");
    const roomName = room;
    const participantName = participant;

    const at = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_SECRET, {
        identity: participantName,
        ttl: '10m',
    });
    at.addGrant({ roomJoin: true, room: roomName });

    return await at.toJwt();
}

module.exports = {
    createToken
};