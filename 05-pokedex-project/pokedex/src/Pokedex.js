import React, { Component } from 'react';
import './Pokecard';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">You Lost!</h1>
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total experience: {this.props.exp}</h4>
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
