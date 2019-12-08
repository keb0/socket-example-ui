import * as React from 'react';
import Header from './components/Header';
import Microphone from './components/Microphone';
import Chat from './components/Chat';

export default function App() {
  return (
    <div>
      <Header />
      <Microphone />
      <Chat />
    </div>
  );
}
