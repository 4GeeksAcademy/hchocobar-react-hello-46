import React, { useState } from "react";
import { Title } from "./Title";


export const TrafficLight = () => {
  const [ light, setLight ] = useState('');

  const handleLight = (color) => {
    setLight(color)
  }

  return (
    <div className="container">
      <Title text='Traffic Light' color='danger' />
      <button onClick={() => handleLight('green')} 
              type="button" 
              class={`btn btn-success ${light == 'green' ? 'glow-green' : ''} mx-3`}
      >
        Success
      </button>
      <button onClick={() => handleLight('yellow')} 
              type="button" 
              class={`btn btn-warning ${light == 'yellow' ? 'glow-yellow' : ''} mx-3`}
      >
        Warning
      </button>
      <button onClick={() => handleLight('red')} 
              type="button" 
              class={`btn btn-danger ${light == 'red' ? 'glow-red' : ''} mx-3`}
      >
        Danger
      </button>
    </div>
  )
}