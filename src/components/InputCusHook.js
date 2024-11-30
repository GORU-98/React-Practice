import React, { useState } from 'react'

const InputCusHook = () => {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")

    const handleClick=()=>{
        alert(`${fname},${lname}`)
    }
  return (
    <div>
      <input value={fname} type='text' onChange={(e)=>setFname(e.target.value)}/>
      <input value={lname} type='text' onChange={(e)=>setLname(e.target.value)}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default InputCusHook
