import React, { useState, useEffect } from 'react';

const ws = new WebSocket('ws:localhost:5001');

export default function Chat() {
  const [toMessage, setToMessage] = useState('');
  const [message, setMessage] = useState([]);

  useEffect(() => {
    ws.onopen = () => {};
  });

  function handleSubmit(e) {
    e.preventDefault();
    ws.send(toMessage);
    setToMessage('');
    setMessage(message.concat(toMessage));
  }

  ws.onmessage = e => {
    setMessage(message.concat(e.data));
  };

  return (
    <div>
      <textarea value={message} readOnly />
      <form onSubmit={handleSubmit}>
        <input type="text" value={toMessage} onChange={e => setToMessage(e.target.value)} />
        <button type="submit">Button</button>
      </form>
    </div>
  );
}
