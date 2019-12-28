import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
`

const MessageBox = styled.input`
  width: 100%;
  background: #f1f1f1;
  border: none;
  padding: 15px;
  margin: 5px 0 22px 16px;
  font-size: 150%;
`

const Send = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 15px;
  margin: 5px 16px 22px 0;
  appearance: none;
`

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
        <Container>
          <MessageBox type="text" value={message} onChange={e => setMessage(e.target.value)} />
          <Send type="submit">
            <FontAwesomeIcon icon={faPaperPlane} size="3x" />
          </Send>
        </Container>
      </form>
    </div>
  );
}
