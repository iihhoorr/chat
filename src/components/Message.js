import React from 'react';
import classNames from 'classnames';

import './Message.scss';

const Message = ({ isMyMessage, message }) => {
 const messageClass = classNames('message-row', {
  'you-message': isMyMessage,
  'other-message': !isMyMessage,
 });

 const imageThumbnail = isMyMessage ? null : (
  <img
   style={{
    opacity: message && message.lastMessage ? '1' : '0',
   }}
   src={message.imageUrl}
   alt={message.imageAlt}
  />
 );

 return (
  <div className={messageClass}>
   <div className="message-content">
    {imageThumbnail}
    <div className="message-text">{message.messageText}</div>
    <div className="message-time">{message.createdAt}</div>
   </div>
  </div>
 );
};

export default Message;
