import React, { Component } from 'react'
import axios from 'axios'

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: ''
        }
    }

    componentDidMount() {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle ')
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