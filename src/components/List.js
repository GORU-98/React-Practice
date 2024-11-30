import React from "react";
import Item  from './Item';


 const List=()=>{
    //    const names=["G1","G2","G3","G4"]
       const superhero=[
        {
            id:1,
            name:"Ironman",
            power:"I am Rich",
            villan:"Thanos"
        },
        {
            id:2,
            name:"Batman",
            power:"I bought the Bank",
            villan:"Superman"
        },
        {
            id:3,
            name:"Captain America",
            power:"Hand Combat",
            villan:"Dr zuno"
        },
       ]
    //    const person=names.map(x=><h1>{x}</h1>)
    //    const person=names.map(x=><Item person={x}/>)
       const person=superhero.map(x=><Item person={x}/>)
        return(
            <>
          {person}
            </>
        )
    }


export default List