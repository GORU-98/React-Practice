import React, { Component } from 'react'
import ChildRef from './ChildRef'

 class ParentRef extends Component {
    constructor(){
        super()
        this.valueR=React.createRef();
    }
    handleValue=()=>{
        this.valueR.current.valueRef();
        console.log(this.valueR)
        console.log("hey")
    }
  render() {
    return (
      <div>
        <ChildRef ref={this.valueR}/>
        <button onClick={this.handleValue}>Click To get the value</button>
      </div>
    )
  }
}

export default ParentRef
