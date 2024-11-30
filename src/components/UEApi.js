import React, { useEffect, useState } from 'react'
import axios from "axios"
const UEApi = () => {

    const [post,setPost]=useState({})
    const [id,setID]=useState(0)
    const [btnId,setBtnID]=useState();

    const handleClick=(e)=>{
        e.preventDefault();
setBtnID(id)

    }
    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(e=>console.log(e))
    },[btnId])
  return (
    <div>
        <input type='text' onChange={(e)=>setID(e.target.value)}/>
        <button onClick={handleClick}>Get Post</button>
      {post.title}
    </div>
  )
}

export default UEApi
