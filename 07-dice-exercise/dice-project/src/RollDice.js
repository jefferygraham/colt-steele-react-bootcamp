import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
    }

    roll = (e) => {
        let randInd1 = Math.floor(Math.random() * this.props.sides.length);
        let randInd2 = Math.floor(Math.random() * this.props.sides.length);
        this.setState({
            die1: this.props.sides[randInd1],
            die2: this.props.sides[randInd2],
            isRolling: true
        })

        setTimeout(() => {
            this.setState({
                isRolling: false
            })
        }, 1000)
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} isRolling={this.state.isRolling} />
                    <Die face={this.state.die2} isRolling={this.state.isRolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling..' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;
