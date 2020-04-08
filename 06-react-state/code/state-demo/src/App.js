import React, { Component } from "react";
import "./App.css";

import Game from './Games';
import Rando from './Rando';
import Button from './Button';
import ButtonClick from './ButtonClick';
import Clicker from './Clicker';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Clicker />
      </div>
    );
  }
}

export default App;
