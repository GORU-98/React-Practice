import React, { Component } from 'react'
import HOCCounter from './HOCCounter'

 class HoverCounter extends Component {

  render() {
    const {increment,count}=this.props
    console.log(this.props.name)
    return (
      <div>
        <button onMouseOver={increment}>Hover {count} Times</button>
      </div>
    )
  }
}

export default HOCCounter(HoverCounter,50)