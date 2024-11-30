import React, { Component } from 'react'
import axios from "axios"
 class AxiosGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:" "
      }
    }
    componentDidMount(){
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            this.setState({posts:response.data})
        })
        .catch(e=>this.setState({
            errorMsg:"SOME TECHNICAL ERROR OCCURED"
        }))
    }
  render() {
    // console.log(this.state)
    const {posts,errorMsg}=this.state
    return (
      <div>
        {
            posts.length ? 
            posts.map(x=>{
                return (
                    <div key={x.id}>{x.title}</div>
                )
            }) : null
        }

        {
            errorMsg.length ? errorMsg : null
        }
      </div>
    )
  }
}

export default AxiosGet
