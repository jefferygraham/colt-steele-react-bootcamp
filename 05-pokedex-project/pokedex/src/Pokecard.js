import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;
        const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        let imgSrc = `${POKE_API}${id}.png`;

        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <img src={imgSrc} alt={name} />
                <div>
                    <p className="Pokecard-data">Type: {type}</p>
                    <p className="Pokecard-data">Exp: {exp}</p>
                </div>
            </div>
        )
    }
}

export default Pokecard;
