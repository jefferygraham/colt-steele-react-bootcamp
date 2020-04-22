import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    handleClick = () => {
        this.props.deleteTodo(this.props.todo)
    }

    render() {
        return (
            <div className="Todo">
                <p>{this.props.todo}</p>
                <button className="Todo-button" onClick={this.handleClick}>x</button>
            </div>
        )
    }
}

export default Todo