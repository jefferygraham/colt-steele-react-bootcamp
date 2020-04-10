import React, { Component } from 'react';
import './Box.css';
import { choice } from './helpers';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        }
    }

    changeColor = () => {
        let newColor;
        do {
            newColor = choice(this.props.allColors)
        } while (newColor === this.state.color)

        this.setState({
            color: newColor
        })
    }

    handleClick = () => {
        this.changeColor();
    }

    render() {
        return (
            <div
                className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
            >
            </div>
        )
    }
}

export default Box;