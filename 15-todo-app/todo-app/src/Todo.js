import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
    }
    handleRemove = () => {
        this.props.removeTodo(this.props.id)
    }

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    toggleCompletion = () => {
        this.props.toggleTodo(this.props.id)
    }
    handleUpdate = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input name='task' type='text' value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li onClick={this.toggleCompletion} className={this.props.completed && 'completed'}>{this.props.task}</li>
                </div>
            )
        }
        return (
            result
        )
    }
}

export default Todo