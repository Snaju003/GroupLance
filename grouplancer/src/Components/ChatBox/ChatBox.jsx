import React, { useState } from 'react';
import ContactList from './ContactList';
import Chat from './Chat';
import ChatHeader from './ChatHeader';
import { useSocket } from '../../context/SocketContext';
const ChatBox = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { groupId, setGroupId, socket } = useSocket();

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <>
      <ChatHeader />
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ flex: '1', padding: '0px 20px' }}>
            <ContactList onGroupClick={handleGroupClick} />
          </div>
          <div style={{ flex: '3' }}>
            {
              selectedGroup ?
                <Chat groupName={selectedGroup.group.gName} chatid={selectedGroup._id} socket={socket} /> :
                <p>Select a group to start chatting.</p>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
