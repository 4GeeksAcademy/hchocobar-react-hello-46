import React from "react"; // 1
import logoReact from "../../img/logo-reactjs.png";
import logoPython from "../../img/logo-python.png";


// 5 y 2
export const Card = (props) => {
  // 3 Code JS 

  // 4
  return (
    <div className="card" style={{ width: "18rem"}}>
      <img src={props.imageURL} className="card-img-top" alt={props.imageAlt} />
      {/* <img src={logoPython} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">{props.textButtom}</a>
      </div>
    </div>

  )
}

// 6 y 7
Card.defaultProps = {
  title: 'Somebody',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content",
  textButtom: 'Learn more',
  imageURL: 'https://randomuser.me/api/portraits/women/34.jpg',
  imageAlt: 'Photo'
}
