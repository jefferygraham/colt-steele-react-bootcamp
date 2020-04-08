import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;
        const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

        let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

        let imgSrc = `${POKE_API}${padToThree(id)}.png`;

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
