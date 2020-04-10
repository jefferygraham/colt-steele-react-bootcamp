import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 16,
        allColors: ['purple', 'magenta', 'brown', 'yellow', 'red', 'blue', 'orange', 'green']
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(box => <Box allColors={this.props.allColors} />)
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;