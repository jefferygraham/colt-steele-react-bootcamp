import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <img src={this.props.imgSrc} alt={`${this.props.value.toLowerCase()}-of-${this.props.suit.toLowerCase()}`} />
        )
    }
}

export default Card