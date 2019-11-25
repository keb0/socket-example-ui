import * as React from 'react';
import Header from './components/Header';
import Microphone from './components/Microphone';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Microphone />
    </div>
  );
};

export default App;
