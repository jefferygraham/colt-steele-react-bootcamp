import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createTodo({ ...this.state, id: uuidv4(), completed: false })
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo</label>
                <input
                    id='task'
                    name='task'
                    type='text'
                    placeholder='New Todo'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}
export default NewTodoForm