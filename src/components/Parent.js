import React,{Component} from "react";
import Child  from './Child';


class Parent extends Component{
        constructor(){
            super();
            this.state={
                time:"8",
                greeting:""
            }
            this.greet=this.greet.bind(this);
        }
        greet(child){
            this.setState({
                time:this.state.time==="10"?"8":"10",
                greeting:child
            },()=>{
               
            })
            console.log(child);
           
        }
    render(){
        return(
            <>
            <div>
                <h1>{this.state.time}</h1>
                <h1>{this.state.greeting}</h1>
                <Child  greet={this.greet}/>
            </div>
            </>
        )
    }
}

export default Parent