import React from "react";  //1


// 5 y 2
export const BtnCallToAction = () => {
  // 3
  const action = {
    text: 'Regístrate',
    background: 'warning'
  }

  // 4
  return (
    <button className={`btn btn-lg btn-${action.background} px-5 mb-5`} type="button">
      {action.text}
    </button>
  )
}