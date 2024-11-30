import React, { useState } from 'react'
import UEHMouse from './UEHMouse'

const UECleanup = () => {

    const [toggle,setToggle]=useState(true)
  return (
    <>
    <div>
      <button onClick={()=>setToggle(!toggle)}>TOGGLE</button>
    </div>

    
        {toggle ? <UEHMouse/> : "GOURAV PANCHAL"}
    </>
    
  )
}

export default UECleanup
