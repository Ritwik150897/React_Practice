import React, { Component } from 'react'
import MemoComp from '../Memo/MemoComp'
import PureComponentDemo from './PureComponent'
import RegularComponent from './RegularComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ritwik'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Ritwik'
            })
        }, 2000)
    }

  render() {
    console.log('Parent component render')
    return (
      <div>
        Parent Component
        {/* <MemoComp/> */}
        <RegularComponent name={this.state.name} />
        <PureComponentDemo name={this.state.name} />
      </div>
    )
  }
}

export default ParentComponent
