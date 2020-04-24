import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck_id: '',
            remaining: 52,
            imgSrc: '',
            suit: '',
            value: ''
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
                    imgSrc: data.cards[0].image,
                    suit: data.cards[0].suit,
                    value: data.cards[0].value,
                })
            })
    }



    render() {
        let display;
        if (this.state.remaining > 0) {
            display =
                <div>
                    <button onClick={this.handleClick}>Gimme a card</button>
                    <Card
                        imgSrc={this.state.imgSrc}
                        suit={this.state.suit}
                        value={this.state.value}
                    />
                </div>
        } else {
            display =
                <div>
                    <p>No More cards!</p>
                </div>
        }
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Deck