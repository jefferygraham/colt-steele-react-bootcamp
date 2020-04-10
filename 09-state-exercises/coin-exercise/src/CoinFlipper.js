import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';
import { choice } from './helpers';

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
            { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numHeads: 0,
            numTails: 0,
            showing: false
        }
    }

    flipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState(currState => ({
            currCoin: newCoin,
            numHeads: currState.numHeads + (newCoin.side === 'heads' ? 1 : 0),
            numTails: currState.numTails + (newCoin.side === 'tails' ? 1 : 0)
        }))
    }

    handleClick = (e) => {
        this.flipCoin();
    };

    render() {
        const { currCoin, numHeads, numTails } = this.state;
        return (
            <div className="CoinFlipper">
                <h2>Let's Flip A Coin</h2>
                {currCoin && <Coin coin={currCoin} />}
                <button onClick={this.handleClick}>Flip Me</button>
                <p>
                    Out of {numHeads + numTails} flips,
                    there have been {numHeads} heads and {numTails} tails
                </p>
            </div>
        )
    }


}

export default CoinFlipper;