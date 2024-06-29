// 1. 
import React from "react";
import { Link } from "react-router-dom";


// 5 y 2. 
export const BtnCallActions = () => {
  // 3. codigo de js
  function handleOnClick() {
    console.log('boton on click');
  }

  let btn = {
    back: 'danger',
    text: 'Login'
  }
  
  // 4.
  return (
    <Link to={'/login'}>
      <button onClick={handleOnClick} className={`btn btn-${btn.back} btn-lg mx-1`} type="button">
        {btn.text}
      </button>
    </Link>
  )
}
