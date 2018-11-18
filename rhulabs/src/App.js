import React, { Component } from 'react';
import './App.css';

import Screen from './components/Screen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen/>
        <Screen/>
      </div>
    );
  }
}

export default App;
