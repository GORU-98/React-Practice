import React,{Component} from 'react'

const HOCCounter = (WrappedComp,incrementNumb) => {
    class NewComp extends  Component{
        constructor(props) {
            super(props)
            this.state = {
               count:0
            }
          }
          increment =()=>{
              this.setState((p)=>{
                  return {
                      count:p.count + incrementNumb
                  }
              })
          }
          
        render(){
            // console.log(this.props.name)
            return (<WrappedComp count={this.state.count} increment={this.increment} {...this.props}/>)
        }
}
return NewComp
}

export default HOCCounter
