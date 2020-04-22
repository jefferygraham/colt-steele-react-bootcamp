import React, { Component } from 'react'

class Todo extends Component {
    handleClick = () => {
        this.props.deleteTodo(this.props.todo)
    }

    render() {
        return (
            <div className="Todo">
                <p>{this.props.todo}</p>
                <button onClick={this.handleClick}>x</button>
            </div>
        )
    }
}

export default Todo