import React, { useState } from 'react'
import axios from 'axios';
function Form() {
    const [name,setname]=useState({
        name:"",
        lname:"",
        comment:"",
        option:"green"
    });

    const onChangeHandle=(e)=>{
        setname({...name,[e.target.name]:e.target.value})
       
    }

    const handleClick=(e)=>{
        e.preventDefault();
       axios.post("https://jsonplaceholder.typicode.com/posts",name)
       .then(x=>{
        console.log(x)
       })
       .catch(e=>{
        console.log(e)
       })
    }
  return (
   <>
   <label>Name</label>
   <input type="text" name="name" value={name.name} onChange={onChangeHandle}/>
   <input type="text" name="lname" value={name.lname} onChange={onChangeHandle}/>
   <input type="text" name="comment"  value={name.comment} onChange={onChangeHandle}/>

   <select value={name.option} name="option" onChange={onChangeHandle}>
    <option value="green">Green</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="yellow">Yellow</option>
   </select>

   <button onClick={handleClick}>Submit Data</button>
   </>

  )
}

export default Form
