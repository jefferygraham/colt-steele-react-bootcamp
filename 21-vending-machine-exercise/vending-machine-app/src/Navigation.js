import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" to="/chips">Chips</NavLink>
                <NavLink exact activeClassName="active" to="/honeybun">Honey Bun</NavLink>
                <NavLink exact activeClassName="active" to="/snickers">Snickers</NavLink>
            </div>
        )
    }
}

export default Navigation