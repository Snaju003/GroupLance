import React from 'react'
import ChatHeader from './ChatHeader'
import ContactList from './ContactList'
import Chat from './Chat'

const ChatBox = () => {
    return (
        <><ChatHeader />
            <div className="container" style={{display:"flex", flexDirection: 'column' }}>
                
                <div className="container" style={{display:"flex",  justifyContent: 'space-around'}}>
                    <div style={{flex:"1",padding:"20px",alignSelf:"center"}}><ContactList /></div>
                    <div style={{flex:"3"}}><Chat /></div>
                </div>
            </div>
        </>
    )
}

export default ChatBox