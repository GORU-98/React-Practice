import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './RegComp';

 class ParentComp extends Component {
    constructor(){
        super();
        this.state={
            name:"Gourav"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Panchal"
            })
        },2000)
    }
  render() {
    console.log("Pure Component")
    return (
      <div>
       <RegComp name={this.state.name}/>
       <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp