import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <button onClick={function () { alert('clicked') }}>Click Me</button>
        )
    }
}

export default Button;