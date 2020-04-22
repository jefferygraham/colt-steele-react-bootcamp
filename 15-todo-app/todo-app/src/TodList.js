import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
const uuid4 = require('uuid4');


class TodoList extends Component {
    state = {
        todos: ['Study react']
    }

    addTodo = (newTodo) => {
        console.log(`Adding ${newTodo}`)
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    deleteTodo = (deletedTodo) => {
        console.log(`deleting...${deletedTodo}`)
        const newTodos = this.state.todos.filter(todo => todo !== deletedTodo)
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <ul>
                    {this.state.todos.map(todo => (
                        <li key={`${uuid4()}`}><Todo deleteTodo={this.deleteTodo} todo={todo} /></li>
                    ))}
                </ul>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList