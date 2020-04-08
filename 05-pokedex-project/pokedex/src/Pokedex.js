import React, { Component } from 'react';
import './Pokecard';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <p>{this.props.isWinner ? "You win" : "You lose"}</p>
                <p>Total experience: {this.props.exp}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemons.map((pokemon) => (
                        <Pokecard
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            exp={pokemon.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;
