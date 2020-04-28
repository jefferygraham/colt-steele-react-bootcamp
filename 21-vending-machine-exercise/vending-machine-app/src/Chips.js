import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

class Chips extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Chips</h1>
                    <Link to="/">Back</Link>
                </Message>
            </div>
        )
    }
}

export default Chips