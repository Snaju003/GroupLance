import { createContext, useState, useContext, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [groupId, setGroupId] = useState(null);

    const socket = useRef();
    useEffect(() => {
        socket.current = io('http://localhost:9000');
    }, [])


    return (
        <SocketContext.Provider value={{
            groupId,
            setGroupId,
            socket
        }}>
            {children}
        </SocketContext.Provider>
    )
}


export const useSocket = () => {
    return useContext(SocketContext);
}