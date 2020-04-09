import React, { Component } from "react";
import "./App.css";


import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery title='Powerball' maxNum={69} />
      </div>
    );
  }
}

export default App;
