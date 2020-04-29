import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
    handleClick = (e) => {
        console.log("Logging in...")
        this.props.history.push('food/salmon')
    }
    handleBack = (e) => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Login</button>
                <button onClick={this.handleBack}>BAck</button>
            </div>
        )
    }
}

export default withRouter(NavBar)