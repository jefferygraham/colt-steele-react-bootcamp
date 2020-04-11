import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [{ width: 10, height: 40, backgroundColor: 'red' }]
        }
    }

    makeBox = (obj) => {
        console.log(obj);
        let boxStyle = {
            height: obj.height,
            width: obj.width,
            backgroundColor: obj.backgroundColor
        };
        let newBox = <Box height={boxStyle.height} width={boxStyle.width} backgroundColor={boxStyle.backgroundColor} />;
        this.setState(st => ({
            boxes: [...st.boxes, newBox]
        }))
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box height={box.height} width={box.width} backgroundColor={box.backgroundColor} />
        ));
        return (
            <div className="BoxList">
                <h1>Box List</h1>
                {boxes}
                <NewBoxForm makeBox={this.makeBox} />
            </div>
        )
    }
}

export default BoxList;