import React, { Component } from 'react'

class NewTodoForm extends Component {
    state = {
        todo: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = this.state.todo
        this.props.addTodo(newTodo)
        this.setState({
            todo: ""
        })
    }

    render() {
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Enter new Todo</label>
                    <input id="todo" name="todo" value={this.state.text} onChange={this.handleChange} />
                    <button>Add New Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm