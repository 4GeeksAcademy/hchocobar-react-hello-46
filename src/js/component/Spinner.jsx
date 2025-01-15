import React from "react"; // 1


// 5 y 2
export const Spinner = () => {
  // 3 Code JS
  const spinner = {
    style: 'danger',
    visible: false
  }

  // 4
  return (
    <div className="container">
      <div className={`spinner-grow text-${spinner.style} ${spinner.visible ? '' : 'd-none'}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
