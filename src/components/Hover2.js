import React, { Component } from 'react'

 class Hover2 extends Component {

  render() {
    const {increment,count}=this.props
    return (
      <div>
        <button onMouseOver={increment}>Hover {count} Times</button>
      </div>
    )
  }
}

export default Hover2