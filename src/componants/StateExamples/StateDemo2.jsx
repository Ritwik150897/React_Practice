import React, { Component } from 'react'

class StateDemo2 extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Click to Change Text',
            text: 'Click Here'
        }
    }

    changeMessage() {
        this.setState ({
            message: 'Hello There!',
            text: 'Clicked'
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

export default StateDemo2
