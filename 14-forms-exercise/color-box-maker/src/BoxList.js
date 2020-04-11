import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
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
        return (
            <div className="BoxList">
                <h1>Box List</h1>
                {this.state.boxes.map(box => (
                    <li>{box}</li>
                ))}
                <NewBoxForm makeBox={this.makeBox} />
            </div>
        )
    }
}

export default BoxList;