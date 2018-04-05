import React from 'react';


const MessageList = ({messages}) => {

  const messageText = messages.map((message, text) => {
    return <li key={`message-${index}`}>{message.text}</li>
  })


  return (

    <ul className='message-list'>
      {messageText}
    </ul>

    )
};





export default MessageList;
