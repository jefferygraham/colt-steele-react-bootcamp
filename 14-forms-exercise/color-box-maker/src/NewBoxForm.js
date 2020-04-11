import React, { Component } from 'react';
import './NewBoxForm.css';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            bgcolor: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className="NewBoxForm ">
                <label htmlFor="height">Enter box height:</label>
                <input id="height" name="height" type="text" value={this.state.height} onChange={this.handleChange} />
                <label htmlFor="width">Enter box width:</label>
                <input id="width" name="width" type="text" value={this.state.width} onChange={this.handleChange} />
                <label htmlFor="bgcolor">Enter background color:</label>
                <input id="bgcolor" name="bgcolor" type="text" value={this.state.bgcolor} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}

export default NewBoxForm;