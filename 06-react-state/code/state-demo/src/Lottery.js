import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Mega Millions',
        maxBalls: 5,
        maxNum: 75
    }

    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.maxBalls })
        }
    }

    generate = () => {
        this.setState((currState) => ({
            nums: currState.nums.map(num => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
    }

    handleClick = () => {
        this.generate();
    }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(num => <LottoBall num={num} />)}
                </div>
                <button onClick={this.handleClick}>Generate Numbers</button>
            </section>
        )
    }
}

export default Lottery;