import React, { Component } from 'react'
import axios from 'axios'

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck_id: '',
            remaining: 52,
            currentCard: ''
        }
    }

    componentDidMount() {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
            .then(res => {
                const data = res.data;
                this.setState({
                    deck_id: data.deck_id,
                    remaining: data.remaining
                })
            })
    }


    handleClick = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`)
            .then(res => {
                const data = res.data;
                console.log(data)
                this.setState({
                    remaining: data.remaining,
                    currentCard: data.cards[0].image
                })
            })
    }



    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Gimme a card</button>
                <div>
                    <img src={this.state.currentCard} />
                </div>
            </div>
        )
    }
}

export default Deck