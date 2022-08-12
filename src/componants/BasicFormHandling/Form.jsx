import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type='text' value={this.state.username}
                        onChange={this.handleUsernameChange} />

                    <br /><br />
                    
                    <label>Comments: </label>
                    <textarea value={this.state.comments}
                        onChange={this.handleCommentsChange}></textarea>

                    <br/><br/>

                    <babel>Topic: </babel>
                    <select value={this.state.topic} 
                    onChange = {this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Angular'>Angular</option>
                    </select>
                    
                    <br/><br/>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
