import React,{Component} from "react";

class Child extends Component{
       
        
    render(){
        return(
            <>
            <div>
              <button onClick={()=>this.props.greet("wake up")}>Click</button>
            </div>
            </>
        )
    }
}

export default Child