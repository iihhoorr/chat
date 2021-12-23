import React, { useState } from 'react';
import Message from './Message';
import './ChatForm.scss';

const isMessageEmpty = (textMessage) => {
 return adjustTextMessage(textMessage).length === 0;
};

const adjustTextMessage = (textMessage) => {
 return textMessage.trim();
};

const ChatForm = () => {
 const [textMessage, setTextMessage] = useState('');
 const disableButton = isMessageEmpty(textMessage);
 const [urlImg] = useState(
  'https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=',
 );

 const [messages, setMessages] = useState([
  {
   createdAt: 'Dec 22',
   imageUrl: null,
   imageAlt: null,
   isMyMessage: true,
   messageText: 'yep',
  },
  {
   createdAt: 'Dec 22',
   imageUrl: urlImg,
   imageAlt: 'Elixirator',
   lastMessage: true,
   messageText: 'again question...',
  },
  {
   createdAt: 'Dec 22',
   imageUrl: null,
   imageAlt: null,
   isMyMessage: true,
   messageText: 'too busy?',
  },
  {
   createdAt: 'Dec 21',
   imageUrl: null,
   imageAlt: null,
   isMyMessage: true,
   messageText: 'And?...)',
  },
  {
   createdAt: 'Dec 21',
   imageUrl: urlImg,
   imageAlt: 'Elixirator',
   isMyMessage: false,
   lastMessage: false,
   messageText: 'Too many questions...',
  },
  {
   createdAt: 'Dec 21',
   imageUrl: null,
   imageAlt: null,
   isMyMessage: true,
   messageText: 'What have you been up to lately?',
  },
  {
   createdAt: 'Dec 20',
   imageUrl: null,
   imageAlt: null,
   isMyMessage: true,
   messageText: 'How’s everything?',
  },
  {
   createdAt: 'Dec 20',
   imageUrl: null,
   imageAlt: null,
   isMyMessage: true,
   messageText: 'What’s new?',
  },
  {
   createdAt: 'Dec 20',
   imageUrl: urlImg,
   imageAlt: 'Elixirator',
   isMyMessage: false,
   lastMessage: false,
   messageText: 'Hello',
  },
  {
   createdAt: 'Dec 20',
   imageUrl: null,
   imageAlt: null,
   isMyMessage: true,
   messageText: 'Hi',
  },
 ]);
 let handleFormSubmit = null;
 let messageItems = null;

 handleFormSubmit = (e) => {
  e.preventDefault();

  if (!isMessageEmpty(textMessage)) {
   setMessages([
    {
     createdAt: new Date().toLocaleTimeString(),
     imageUrl: null,
     imageAlt: null,
     isMyMessage: true,
     messageText: textMessage,
    },
    ...messages,
   ]);
   setTextMessage('');
  }
 };

 if (messages && messages.length > 0) {
  messageItems = messages.map((message, index) => {
   return (
    <Message key={index} isMyMessage={message.isMyMessage} message={message} />
   );
  });
 }

 return (
  <div id="chat-container">
   <div id="chat-title">
    <img className="post-avatar" src={urlImg} alt={'Elixirator'} />
    <span>Elixirator</span>
   </div>
   <div id="chat-message-list">{messageItems}</div>
   <form id="chat-form" onSubmit={handleFormSubmit}>
    <input
     type="text"
     placeholder="type a message"
     value={textMessage}
     onChange={(e) => {
      setTextMessage(e.target.value);
     }}
    />
    <button type="submit" className="primary-button" disabled={disableButton}>
     Send
    </button>
   </form>
  </div>
 );
};

export default ChatForm;
