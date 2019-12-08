import * as React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  &::before,
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const Avater = styled.img`
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
`;

interface Message {
  message: string;
  time: string;
}

interface Props {
  message: Message;
}

export default function Message(props: Props) {
  const { message } = props;

  return (
    <Card>
      {/* <img src="/w3images/bandmember.jpg" alt="Avatar"></img> */}
      <p>{message.message}</p>
      <span className="time-right">{message.time}</span>
    </Card>
  );
}
