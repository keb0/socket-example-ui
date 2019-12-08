import React, { useState } from 'react';

interface Props {
  handleSubmit: (e) => void;
}

export default function Form(props: Props) {
  const [message, setMessage] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    props.handleSubmit(message);
    setMessage('');
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button type="submit">buttom</button>
      </form>
    </div>
  );
}
