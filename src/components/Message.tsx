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

const Avatar = styled.img`
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
`;

const MyAvatar = styled.img`
  float: right;
  max-width: 60px;
  margin-left: 20px;
  margin-right: 0;
  border-radius: 50%;
`;

const TimeText = styled.span`
  float: right;
  color: #aaa;
`;

const MyTimeText = styled.span`
  float: left;
  color: #999;
`;

interface Message {
  flg: number;
  message: string;
  time: string;
}

interface Props {
  message: Message;
}

export default function Message(props: Props) {
  const { message } = props;
  const MessageCard =
    message.flg === 0 ? (
      <Card>
        <MyAvatar src="/img/cat.png" />
        <p>{message.message}</p>
        <MyTimeText className="time-right">{message.time}</MyTimeText>
      </Card>
    ) : (
      <Card>
        <Avatar src="/img/car.png" />
        <p>{message.message}</p>
        <TimeText className="time-right">{message.time}</TimeText>
      </Card>
    );

  return <>{MessageCard}</>;
}
