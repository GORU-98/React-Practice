import React ,{useState,useEffect,useRef} from 'react'

const UseRefTimer = () => {
    const [time,setTimer] = useState(0)
    const timerRef=useRef(null)
    const timer=()=>{
        setTimer(p=>p + 1)
        console.log("hey")
    }
    useEffect(()=>{
         timerRef.current=setInterval(timer,1000)
       return()=>{
        clearInterval(timerRef.current)
       }
    },[])
  return (
    <div>
      {time}
      <button onClick={()=> clearInterval(timerRef.current)}>Click to remove to timer</button>
    </div>
  )
}

export default UseRefTimer
