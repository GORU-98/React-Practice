import React from "react";
// import Child  from './Child';


 const Item=(props)=>{
    const  {id,name,power,villan}=props.person
        return(
            <>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <h1>{power}</h1>
        <h1>{villan}</h1>
            </>
        )
    }


export default Item