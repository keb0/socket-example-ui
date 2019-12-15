import * as React from 'react';
import Header from './components/Header';
import Microphone from './components/Microphone';
import AppChat from './components/AppChat';
import AppAudio from './components/AppAudio';

export default function App() {
  return (
    <div>
      <Header />
      <Microphone />
      <AppChat />
      <AppAudio />
    </div>
  );
}
