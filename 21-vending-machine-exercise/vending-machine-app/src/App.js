import React from 'react';
import { Route, Switch } from "react-router-dom"

import Navigation from './Navigation'
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import HoneyBun from './HoneyBun'
import Snickers from './Snickers'


import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/chips" component={Chips} />
        <Route exact path="/honeybun" component={HoneyBun} />
        <Route exact path="/snickers" component={Snickers} />
      </Switch>
    </div>
  );
}

export default App;
