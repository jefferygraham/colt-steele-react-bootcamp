import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numBoxes: 0
        }
    }

    makeBox = (obj) => {
        console.log(obj);
    }

    render() {
        return (
            <div className="BoxList">
                <h1>Box List</h1>
                <Box />
                <NewBoxForm makeBox={this.makeBox} />
            </div>
        )
    }
}

export default BoxList;