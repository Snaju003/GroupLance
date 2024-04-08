import React, { useEffect, useState } from "react";
import {
    ControlBar,
    GridLayout,
    LiveKitRoom,
    ParticipantTile,
    RoomAudioRenderer,
    useTracks,
    VideoConference,
} from '@livekit/components-react';
import "@livekit/components-styles";
import { Track } from "livekit-client";
import { useNavigate } from 'react-router-dom';
const LIVEKIT_URL = "wss://grouplancer-tiuvd8fz.livekit.cloud";

const VideoCall = () => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const groupId = sessionStorage.getItem('grpId');
    const user = sessionStorage.getItem('userId')
    useEffect(() => {
        (async () => {
            try {

                const authToken = localStorage.getItem('auth-token');
                const response = await fetch('http://localhost:8080/api/livekit/getToken', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": authToken,
                    },
                    body: JSON.stringify({ roomId: groupId, username: user })
                });
                const data = await response.json();
                console.log(data);
                setToken(data.token);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    if (token === "") {
        return (
            <div>
                Loading....
            </div>
        )
    }

    return (
        <LiveKitRoom
            video={true}
            audio={true}
            token={token}
            serverUrl={LIVEKIT_URL}
            // Use the default LiveKit theme for nice styles.
            data-lk-theme="default"
            style={{ height: '100vh' }}
            onDisconnected={() => {
                navigate("/chatbox");
            }}
        >
            {/* Your custom component with basic video conferencing functionality. */}
            <MyVideoConference />
            {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
            <RoomAudioRenderer />
            {/* Controls for the user to start/stop audio, video, and screen 
        share tracks and to leave the room. */}
            <ControlBar />
        </LiveKitRoom>
    )
}

function MyVideoConference() {
    // `useTracks` returns all camera and screen share tracks. If a user
    // joins without a published camera track, a placeholder track is returned.
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false },
    );
    return (
        <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
            {/* The GridLayout accepts zero or one child. The child is used
        as a template to render all passed in tracks. */}
            <ParticipantTile />
        </GridLayout>
    );
}

export default VideoCall;