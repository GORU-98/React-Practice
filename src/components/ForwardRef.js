import React, { Component } from 'react'
import ChildForwardref from './ChildForwardref';

 class ForwardRef extends Component {
    constructor(props) {
      super(props)
    
     this.iRef=React.createRef();

    }

    handleClick=()=>{
      
        console.log( this.iRef.current.value)
    }
  render() {
    return (
      <div>
        <ChildForwardref ref={this.iRef}/>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default ForwardRef