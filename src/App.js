import React from 'react';
import './App.css';
import Home from './components/Home';
import Server from './server';

function App() {
  Server();
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;