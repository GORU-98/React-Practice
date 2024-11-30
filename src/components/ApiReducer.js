import React ,{useReducer,useEffect}from 'react'
import axios from "axios"
let  initialValue ={
    loading:true,
    post:{},
    error:"",
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'Success' :
            return {
                 loading:false,
                 post:action.payload,
                 error:"",
                }
        case 'Error' :
            return {
                loading:false,
                post:{},
                error:"Something Error",
            }

            default :
            return state

    }
}


const ApiReducer = () => {

    const [state,dispatch]=useReducer(reducer,initialValue)

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response=>{
            dispatch({type:"Success",payload:response.data})
        })
        .catch(e=>{
            dispatch({type:"Error"})
        })
    },[])
  return (
    <div>
      {state.loading?"loading":state.post.title}
      {state.error?state.error : null}
      {}
    </div>
  )
}

export default ApiReducer
