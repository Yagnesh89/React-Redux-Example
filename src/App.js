import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Productparent from './container/productparent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Productparent />
      </div>
    );
  }
}

export default App;
