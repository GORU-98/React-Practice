import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    useEffect(()=>{
        document.title=count;
        console.log("updating")
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>{count}</h1>
        <h1>{name}</h1>
      <button onClick={()=>setCount(count + 5)}>Click</button>
    </div>
  )
}

export default UseEffect
