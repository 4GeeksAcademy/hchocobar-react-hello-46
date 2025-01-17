import React from "react"; // 1 


// 5 y 2
export const Title = (props) => {
  // 3 
  console.log(props)
  
  // 4 
  return (
    <div>
      <h1 className={`text-center text-${props.color} my-2`}>{props.text}</h1>
    </div>
  )
}

Title.defaultProps = {
  text: 'Titulo Modelo',
  color: 'danger'
}

// 6 y 7
