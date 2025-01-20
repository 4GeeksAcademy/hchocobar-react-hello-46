import React from "react"; // 1


// 5 y 2 
export const Footer = () => {
  // 3 Code JS
  const cohorte = 'Spain-93'

  // 4 Return un elemento HTML
  return (
    <div className="container">
      <hr />
      <p className="text-small">
        <span>Made by </span>
        <a href="http://www.4geeksacademy.com" target="_blank">4Geeks Academy</a>
        <span> & </span>
        <a href="http://chocobar.net" target="_blank">Héctor</a>
        <span>, with love for <strong className="text-danger">{cohorte}</strong></span>
      </p>
    </div>
  )
}

// 6 y 7
