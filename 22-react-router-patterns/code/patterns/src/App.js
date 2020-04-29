import React from 'react';
import Food from './Food'
import Meal from './Meal'
import NotFound from './NotFound'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import FoodSearch from './FoodSearch';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/food/:name" component={Food} />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
        <Route exact path="/" component={FoodSearch} />
        <Route exact component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
