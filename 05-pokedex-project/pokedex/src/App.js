import React from 'react';
import './App.css';
import './Pokecard';
import Pokecard from './Pokecard';

function App() {
  return (
    <div className="App">
      <Pokecard
        id={4}
        name="Charmander"
        type="fire"
        exp={62}
      />
    </div>
  );
}

export default App;
