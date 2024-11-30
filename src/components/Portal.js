import React from 'react'
import ReactDom from "react-dom"
const notify=document.getElementById("notify")
const Portal = () => {
  return ReactDom.createPortal(
    <div>
      I am the new Notification
    </div>,
    notify
  )
}

export default Portal
