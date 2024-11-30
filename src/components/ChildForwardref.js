import React from 'react'

 const  ChildForwardref = React.forwardRef((props,ref)=> {
  return (
    <div>
      <input type='text' ref={ref}/>
    </div>
  )
})

export default ChildForwardref