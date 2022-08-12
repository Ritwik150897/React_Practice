import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <h3 onMouseOver={incrementCount}>
        Hovered {count} Times
      </h3>
    )
  }
}

export default withCounter(HoverCounter) 
