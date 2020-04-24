import React, { Component } from 'react'

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: ''
        }
    }
    render() {
        return (
            <div>
                <h1>DECK</h1>
            </div>
        )
    }
}

export default Deck