import React from 'react';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
