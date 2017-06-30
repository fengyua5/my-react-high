import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './example';
import DExample from './DExample';
import Input from './components/Input/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Example />
          <Input
            className="input"
            defaultValue="input"
          />
      </div>
    );
  }
}
export default App;
