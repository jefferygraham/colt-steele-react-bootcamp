import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [{ width: 10, height: 15, backgroundColor: 'red' }]
        }
    }

    create = (newBox) => {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box height={box.height} width={box.width} backgroundColor={box.backgroundColor} />
        ));
        return (
            <div className="BoxList">
                <h1>Box List</h1>
                {boxes}
                <NewBoxForm create={this.create} />
            </div>
        )
    }
}

export default BoxList;