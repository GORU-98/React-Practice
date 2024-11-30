import React, { useState } from 'react'

const UseStateArr = () => {
    const [items,setItem] = useState([])
    const addItem=()=>{
      setItem([...items,{
        id:items.length,
        value:Math.floor(Math.random() * 100)}])
    }
  return (
    <>
    <button onClick={addItem}>click to add item</button>
    <ul>

    {
      items.map((item)=>{
        return  (
          <>
        <li>{item.value}</li>
        <li>{item.id}</li>
          </>

        )
      })
    }
    </ul>
    </>
  )
}

export default UseStateArr
