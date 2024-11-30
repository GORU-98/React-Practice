import React, { Component } from 'react'

 class RefComp extends Component {
    constructor(props) {
      super(props)
    
    //  this.inputRef=React.createRef();
    this.inRef=null;
   this.setInRef=element=>{
    this.inRef=element
   }

    }
    
    componentDidMount(){
        console.log(this.inRef)
        if(this.inRef){
            this.inRef.focus();
        }
        // this.inputRef.current.focus()
    }
    handleClick=()=>{
        console.log( this.inputRef.current.value)

    }
  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inputRef}/> */}
        <input type='text' ref={this.setInRef}/>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
export default RefComp