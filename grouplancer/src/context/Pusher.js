import PusherClient from 'pusher-js';

export const pusherClient = new PusherClient(
    "ca0673719f6397541ccc",
    {
        cluster: "ap2"
    }
)