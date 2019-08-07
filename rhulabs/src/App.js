import React, { Component } from 'react';
import './App.css';

import Screen from './components/Screen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen backgroundColor='#ffffff' textColor='#293247'>
            <h1>Hi, My Name is Ryan</h1>
            <h3>I'm a FullStack Javascript Developer</h3>
        </Screen>
        <Screen backgroundColor='#D9D9D9' textColor='#293247'>
            <h1>My, Projects</h1>
        </Screen>
        <Screen backgroundColor='#4484CE' textColor='#293247'>
            <h1>Skills & Technical Background</h1>
        </Screen>
        <Screen backgroundColor='#D9D9D9' textColor='#293247'>
            <h1>My, Story</h1>
        </Screen>
      </div>
    );
  }
}

export default App;
