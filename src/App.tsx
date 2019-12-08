import * as React from 'react';
import Header from './components/Header';
import Microphone from './components/Microphone';
import AppChat from './components/AppChat';

export default function App() {
  return (
    <div>
      <Header />
      <Microphone />
      <AppChat />
    </div>
  );
}
