import React, { Component } from 'react';
import './App.css';

import Screen from './components/Screen'
import Header from './components/Header'
import Home from './components/Home'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen backgroundColor='#ffffff' textColor='#293247'>
            <Header />
            <Home />
        </Screen>
        <Screen backgroundColor='#e9414e' textColor='#ffffff'>
            <Intro />
        </Screen>
        <Screen backgroundColor='#ffffff' textColor='#293247'>
            <Skills/>
        </Screen>
        <Screen backgroundColor='#e9414e' textColor='#ffffff'>
            <Projects />
        </Screen>
      </div>
    );
  }
}

export default App;
