import React, { Component } from 'react';
import './App.css';

import Screen from './components/Screen'
import Header from './components/Header'
import Intro from './components/Intro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen backgroundColor='#ffffff' textColor='#293247'>
            <Header />
            <Intro />
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
