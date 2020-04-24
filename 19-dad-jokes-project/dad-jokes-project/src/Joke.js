import React, { Component } from 'react'

class Joke extends Component {
    render() {
        return (
            <li>{this.props.joke}</li>
        )
    }
}

export default Joke