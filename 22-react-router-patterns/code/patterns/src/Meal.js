import React, { Component } from "react";

class Meal extends Component {
    render() {
        const data = this.props.match.params;
        const drinkUrl = `https://source.unsplash.com/1600x900/?${data.drinkName}`;
        const foodUrl = `https://source.unsplash.com/1600x900/?${data.foodName}`;
        return (
            <div className='Food'>
                <h1>This is a meal</h1>
                <img src={foodUrl} alt={data.foodName} />
                <img src={drinkUrl} alt={data.drinkName} />
            </div>
        )
    }
}

export default Meal;
