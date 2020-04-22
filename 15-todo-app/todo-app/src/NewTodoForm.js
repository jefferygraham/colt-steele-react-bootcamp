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
                    <div>
                        <label htmlFor="todo">Enter new Todo</label>
                    </div>
                    <div>
                        <input id="todo" name="todo" value={this.state.text} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Add New Todo</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default NewTodoForm