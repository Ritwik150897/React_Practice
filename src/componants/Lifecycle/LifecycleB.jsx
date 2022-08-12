import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ritwik'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }


    render() {
        console.log('LifecycleB render')
        return (
            < div >
                <span>Lifecycle B</span>
            </div>
        )
    }
}

export default LifecycleB
