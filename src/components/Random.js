import React, { Component } from 'react'

 class Random extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            name:" "
        }
    }

    componentDidMount(){
        document.title=`${this.state.count}`
    }

    componentDidUpdate(prevProp,prevState){
        if(prevState.count !== this.state.count){ // conditional rendering of the state
            document.title=`${this.state.count}`
            console.log("updating")
        }

    }

   titleChange=()=>{
    this.setState((p)=>({
        count:p.count + 1
    }))
   }

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.titleChange}>Click </button>
      </div>
    )
  }
}

export default Random
