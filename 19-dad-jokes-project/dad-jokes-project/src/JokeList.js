import React, { Component } from 'react'
import axios from 'axios'
import Joke from './Joke'

class JokeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    async componentDidMount() {
        while (this.state.jokes.length < 10) {
            let joke = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            this.setState({
                jokes: [...this.state.jokes, joke.data]
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Jokes</h1>
                <ol>
                    {this.state.jokes.map(joke => <Joke joke={joke.joke} />)}
                </ol>
            </div>
        )
    }
}

export default JokeList