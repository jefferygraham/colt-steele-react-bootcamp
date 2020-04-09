import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
    static defaultProps = {
        faces: ['heads', 'tails']
    }

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numHeads: 0,
            numTails: 0,
            showing: false
        }
    }

    flip = () => {
        let face = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        if (face === 'heads') {
            this.setState((currState) => ({
                numHeads: currState.numHeads + 1,
                showing: true,
                currCoin: face
            }))
        } else {
            this.setState((currState) => ({
                numTails: currState.numTails + 1,
                showing: true,
                currCoin: face
            }))
        }
    }

    handleClick = (e) => {
        this.flip();
    }

    render() {
        const { numHeads, numTails, showing } = this.state;
        return (
            <div className="CoinFlipper">
                <h2>Let's Flip a Coin</h2>
                <Coin showing={showing} face={this.state.currCoin} />
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>Out of {numHeads + numTails} flips, there have {numHeads} heads and {numTails} tails</p>
            </div>
        )
    }
}

export default CoinFlipper;