import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Lottery">
                <LottoBall num={5} />
            </div>
        )
    }
}

export default Lottery;