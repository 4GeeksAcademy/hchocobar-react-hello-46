import React from "react"; // 1


// 5 y 2
export const Alert = () => {
  // 3 Code JS
  const message = {
    text: 'A simple primary alert—check it out!',
    style: 'success',
    visible: false
  }


  // 4 
  return (
    <div className="container">
      <div className={`alert alert-${message.style} ${message.visible ? '' : 'd-none' }`} role="alert">
        {message.text}
      </div>
    </div>
  )
}
