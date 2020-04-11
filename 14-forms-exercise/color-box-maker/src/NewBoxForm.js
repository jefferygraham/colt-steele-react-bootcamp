import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            backgroundColor: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.create(this.state);
        this.setState({
            height: "",
            width: "",
            backgroundColor: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewBoxForm ">
                <div>
                    <label htmlFor="height">Enter box height:</label>
                    <input id="height" name="height" type="text" value={this.state.height} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="width">Enter box width:</label>
                    <input id="width" name="width" type="text" value={this.state.width} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="color">Enter background color:</label>
                    <input id="backgroundColor" name="backgroundColor" type="text" value={this.state.backgroundColor} onChange={this.handleChange} />
                </div>
                <button>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm;