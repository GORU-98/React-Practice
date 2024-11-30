import React from 'react'
import { Consumer } from './UserContext'

const Comp3 = () => {
  return (
   <Consumer>
    {(value)=>{
        return <>
        <div>
            {`Gourav ${value}`}
        </div>
        </>
    }}
   </Consumer>
  )
}

export default Comp3
