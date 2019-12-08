import * as React from 'react';
import Message from './Message';

interface Message {
  message: string;
  time: string;
}

interface Props {
  messages: Message[];
}

export default function ChatBox(props: Props) {
  const { messages } = props;

  return (
    <div>
      {messages.map((message, index) => {
        return <Message key={index.toString()} message={message} />;
      })}
    </div>
  );
}
