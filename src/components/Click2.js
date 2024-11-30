import React, { Component } from 'react'

 class Click2 extends Component {

  render() {
    const {increment,count}=this.props
    return (
      <div>
        <button onClick={increment}>Hover {count} Times</button>
      </div>
    )
  }
}

export default Click2