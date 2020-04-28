import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

class Snickers extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Snickers</h1>
                    <Link to="/">Back</Link>
                </Message>
            </div>
        )
    }
}

export default Snickers