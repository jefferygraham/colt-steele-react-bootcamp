import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <div className="Todo">
                <p>{this.props.todo}</p>
                <button>x</button>
            </div>
        )
    }
}

export default Todo