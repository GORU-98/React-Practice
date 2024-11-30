import React, { useReducer } from 'react'
let initialValue={
    counter1 : 0,
    counter2:1
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment' :
        return {...state,counter1:state.counter1 + action.value}
        case 'decrement' :
        return {...state,counter1:state.counter1 - action.value}
        case 'increment1' :
        return {...state,counter2:state.counter2 + action.value}
        case 'decrement1' :
        return {...state,counter2:state.counter2 - action.value}
        case 'reset' :
        return initialValue
        default :
       return state
    }
}
const CounterReducerOne = () => {

   const [state,dispatch] = useReducer(reducer,initialValue);
  return (
    <div>
        <h1>{state.counter1}</h1>
        <h1>{state.counter2}</h1>
      <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
      <button  onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type:'increment',value:12})}>Increment1</button>
      <button  onClick={()=>dispatch({type:'decrement',value:12})}>Decrement1</button>
      <button onClick={()=>dispatch({type:'increment1',value:2})}>Increment2</button>
      <button  onClick={()=>dispatch({type:'decrement1',value:2})}>Decrement2</button>
      <button  onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterReducerOne
