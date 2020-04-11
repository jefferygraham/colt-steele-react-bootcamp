import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.backgroundColor
                }}>
                </div>
                <button>X</button>
            </div>
        )
    }
}

export default Box;