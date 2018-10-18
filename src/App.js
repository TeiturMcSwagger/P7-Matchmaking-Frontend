import React, { Component } from 'react';
import MyComponent from './custom.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        </header>
        <MyComponent />
      </div>
    );
  }
}

export default App;