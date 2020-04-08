import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    handleClick = (e) => {
        let newNum = Math.floor(Math.random() * 10) + 1;
        this.setState({
            num: newNum
        })
    }

    render() {
        let display;
        if (this.state.num === 7) {
            display = <h2>You Win!</h2>
        }
        else {
            display = <button onClick={this.handleClick}>Random Number</button>
        }

        return (
            <div className="Clicker">
                <h1>Number is {this.state.num}</h1>
                {display}
            </div>
        )
    }
}

export default Clicker;