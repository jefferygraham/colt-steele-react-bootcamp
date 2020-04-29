import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.searchFood(this.state.query)
    }

    handleClick = (e) => {
        e.preventDefault();
        alert("Saved");
        this.props.history.push(`/food/${this.state.query}`)
    }

    render() {
        return (
            <div>
                <h1>Search for a food:</h1>
                <input
                    id='query'
                    name='query'
                    type='text'
                    placeholder='Enter food'
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.query}`} >GO!</Link>
                <button onClick={this.handleClick}>Save food</button>
            </div>
        )
    }
}

export default FoodSearch