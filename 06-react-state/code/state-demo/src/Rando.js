import React, { Component } from 'react';

class Rando extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    makeTimer() {
        setInterval(() => {
            this.setState({
                num: Math.floor(Math.random() * this.props.maxNum)
            })
        }, 1000)
    }

    render() {
        return (
            <h1>
                {this.state.num}
            </h1>
        )
    }
}

export default Rando;
