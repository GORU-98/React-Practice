import React, { useEffect, useState } from 'react'

const UEHMouse = () => {
    const [x,setX]=useState("");
    const [y,setY]=useState("");

    const handleMouse=(e)=>{
        console.log("hey")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener("mousemove",handleMouse)
        return ()=>{
            window.removeEventListener("mousemove",handleMouse)//a callback which runs after  the unmounting of the component
        }
    },[])
  return (
    <div>
      X:{x}
      Y:{y}
    </div>
  )
}

export default UEHMouse
