import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // Approach 1: if else
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Hello Ritwik</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Hello Guest</div>

        //     )
        // }


        //Approach 2: element variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Ritwik</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        //Approach 3: conditional ternary operators
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Ritwik</div> :
        //         <div>Welcome Guest</div>
        // )


        //Approach 4: short circuit operator
        return this.state.isLoggedIn && <div>Welcome Ritwik</div>
    }
}

export default UserGreeting
