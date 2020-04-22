import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
    state = {
        todos: []
    }

    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove = (id) => {
        console.log(id)
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    update = (id, updateTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updateTask };
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    toggle = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        const todos = this.state.todos.map(todo =>
            <Todo
                removeTodo={this.remove}
                updateTodo={this.update}
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                toggleTodo={this.toggle}
            />)

        return (
            <div>
                <h1>TodoList!</h1>
                <NewTodoForm createTodo={this.create} />
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList