import React from 'react';
import Credentials from './sections/1.Credentials/Credentials';
import ShortBio from './sections/2.ShortBio/ShortBio';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Credentials />
      <ShortBio />
    </div>
  );
};

export default App;
