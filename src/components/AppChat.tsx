import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ChatBox from './ChatBox';
import Form from './Form';

const ws = new WebSocket('ws:localhost:8000/ws/chat/aaa/');

export default function AppChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ws.onopen = () => {};
  });

  function handleSubmit(toMessage) {
    if (toMessage) {
      ws.send(toMessage);
      setMessages([
        ...messages,
        {
          flg: 0,
          message: toMessage,
          time: moment()
            .format('HH:mm:ss')
            .toString(),
        },
      ]);
    }
  }

  ws.onmessage = e => {
    const data = JSON.parse(e.data);
    const recvMessage = data['message'];

    setMessages([
      ...messages,
      {
        flg: 1,
        message: recvMessage,
        time: moment()
          .format('HH:mm:ss')
          .toString(),
      },
    ]);
  };

  return (
    <div>
      <ChatBox messages={messages} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
