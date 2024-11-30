import React, { Component } from 'react'

class RenderProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
           count:0
        }
      }
      increment =()=>{
          this.setState((p)=>{
              return {
                  count:p.count + 2
              }
          })
      }
  render() {
    return (
        <>
      {this.props.render(this.state.count,this.increment)}
      </>
    )
  }
}

export default RenderProps