import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Icon type={logo} className="App-logo" size="lg"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
