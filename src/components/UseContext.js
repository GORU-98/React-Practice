import React ,{useContext}from 'react'
import {userContext} from "../App"
const UseContext = () => {
    const value=useContext(userContext)
  return (
    <div>
      {value}
    </div>
  )
}

export default UseContext
