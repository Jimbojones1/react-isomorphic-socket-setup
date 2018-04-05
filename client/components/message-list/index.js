import React from 'react';


const MessageList = ({messages}) => {

  const messageText = messages.map((message, i) => {
    return <li key={`message-${i}`}>{message.text}</li>
  })


  return (

    <ul className='message-list'>
      {messageText}
    </ul>

    )
};





export default MessageList;
