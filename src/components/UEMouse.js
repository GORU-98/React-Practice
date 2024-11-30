import React, { Component } from 'react'

 class UEMouse extends Component {
    constructor(){
        super()
        this.state={
            x:" ",
            y:" "
        }
    }

    handleMouse=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }

    componentDidMount(){
        window.addEventListener("mousemove",this.handleMouse)
    }

  render() {
    
    return (
      <div>
   X:     {this.state.x}
     Y:   {this.state.y}
      </div>
    )
  }
}

export default UEMouse