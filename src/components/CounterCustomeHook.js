import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterCustomeHook = () => {
   
   const [increment,decrement,reset,count]=useCounter(2,4)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterCustomeHook
