import React,{useEffect,useRef} from 'react'
import UseRefTimer from './UseRefTimer';

const UseRef = () => {
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus();
    },[])
  return (
    <div>
      <input type='text' ref={inputRef}/>
      <UseRefTimer/>
    </div>
  )
}

export default UseRef
