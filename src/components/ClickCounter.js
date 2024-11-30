import React, { Component } from 'react'
import HOCCounter from './HOCCounter'

 class ClickCounter extends Component {

  render() {
    const {increment,count}=this.props
    return (
      <div>
        <button onClick={increment}>Clicked {count} Times</button>
      </div>
    )
  }
}

export default HOCCounter(ClickCounter,625)