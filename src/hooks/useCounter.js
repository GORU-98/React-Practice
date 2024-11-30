import {useState} from 'react'

const useCounter = (initialValue=0,value=1) => {
    const [count,setCount]=useState(initialValue)
    const increment=()=>{
        setCount(p=>p + value)
    }
    const decrement=()=>{
        setCount(p=>p - value)
    }
    const reset=()=>{
        setCount(initialValue)
    }
    return [increment,decrement,reset,count]
}

export default useCounter
