import React, { useState } from 'react'

const Item1 = () => {
    const [add,setAdd] = useState([])
    const addItem=()=>{
        setAdd([...add,{
            id:add.length,
            value:Math.round(Math.random()*100)
        }])
    }
  return (
    <div>
      <button onClick={addItem}>Click To add item</button>
      {add.map((x)=>{
        return (
            <>
            <div key={x.id}>{x.value}</div>
            </>
        )
      })}
    </div>
  )
}

export default Item1
