import React from 'react'
import ChatHeader from './ChatHeader'
import ContactList from './ContactList'
import Chat from './Chat'

const ChatBox = () => {
    return (
        <>
            <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                <ChatHeader />
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <ContactList />
                    <Chat />
                </div>
            </div>
        </>
    )
}

export default ChatBox