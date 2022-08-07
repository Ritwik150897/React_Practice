import React, { Component } from "react";

class Statedemo extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Please Subscribe',
            text: 'Subscribe'
        }
    }

    changeMessage() {
        this.setState ({
            message: 'Thankyou for Subscribing!',
            text: 'Subscribed'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.changeMessage()}>{this.state.text}</button>
            </div>
        )
    }
}

export default Statedemo