import React from "react"; // 1
import logoReact from "../../img/logo-reactjs.png";
import logoPython from "../../img/logo-python.png";


// 5 y 2
export const Card = () => {
  // 3 Code JS 

  // 4
  return (
    <div className="card" style={{ width: "18rem"}}>
      <img src="https://randomuser.me/api/portraits/women/34.jpg" className="card-img-top" alt="..." />
      <img src={logoPython} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  )
}

// 6 y 7
