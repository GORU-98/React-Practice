import React,{Component} from "react"

class Count extends Component{
    constructor(){
        super();
        this.state={
            count:0
        };
    }
    setcount=()=>{
        // this.setState({
        //     count:this.state.count + 2
        // },()=>{
        //     console.log(this.state.count);
        // })
        this.setState((prevState)=>({
            count:prevState.count + 5
        }),()=>{
            console.log(this.state.count);

        })
    }
    
    render(){
        // const {name}=this.props;
        return(
            <>
            <h1>Count --{this.state.count}</h1>
            <button onClick={()=>this.setcount()}>Click</button>
             </>
        )
    }
}

export default Count