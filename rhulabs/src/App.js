import React, { Component } from 'react';
import './App.css';

import Screen from './components/Screen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen color='green'>
            <h1>Hi, My Name is Ryan</h1>
            <h3>I'm a FullStack Javascript Developer</h3>
        </Screen>
        <Screen>
            <h1>My, Story</h1>
        </Screen>
      </div>
    );
  }
}

export default App;
