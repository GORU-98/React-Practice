import React ,{useContext} from 'react'
import { userContext } from '../App'

const CountA = () => {
   const value= useContext(userContext)
  return (
    <div>
       <button onClick={()=>value.dispatch('increment')}>Increment</button>
      <button  onClick={()=>value.dispatch('decrement')}>Decrement</button>
      <button  onClick={()=>value.dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CountA
