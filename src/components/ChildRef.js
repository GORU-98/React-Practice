import React, { Component } from 'react'

 class ChildRef extends Component {
    constructor(){
        super();
        this.inputRef=React.createRef();

    }

    valueRef=()=>{
        this.inputRef.current.focus();
        console.log("hey")
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}

export default ChildRef