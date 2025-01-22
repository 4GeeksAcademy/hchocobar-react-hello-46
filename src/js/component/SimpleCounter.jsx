import React, { useEffect, useState } from "react";  // 1 React, y Hooks
import { Title } from "./Title.jsx";


// 5 y 2
export const SimpleCounter = () => {
  const [ counter, setCounter ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ start, setStart ] = useState('Start');
  const [ icon, setIcon ] = useState('clock')
  const [ subtitle, setSubtitle ] = useState({text: 'Clock', color: 'primary'})

  const handleStart = () => {
    setIsRunning(!isRunning)
    setIcon('stopwatch')
    setSubtitle({text: 'Chronometer', color: 'warning'})
    // opcion 1
    if (isRunning) {
      counter == 0 ? setStart('Start') : setStart('Continue');
    } else {
      setStart('Pause')
    }
  }

  const handleReset = () => {
    setSubtitle({text: 'Clock', color: 'primary'})
    setStart('Start');
    setIcon('clock')
    setCounter(0);
    setIsRunning(false)
  }


  // Sintaxis: useEffect(funciónSetup, array de dependencias)
  // Cuando se ejecuta la funciónSetup del useEffect?
  //   - Depende del array de dependcias
  //     - Cuando el array está vació, se ejecuta una sola vez, al iniciar el componente
  //     - Cuando cambia de valor alguna dependencia (son las que están en el array)
  useEffect(() => {
    if (isRunning) {
      const newInterval = setInterval(() => {
        setCounter(counter => counter + 1);
      }, 10);
 
      return () => clearInterval(newInterval);
    }
  }, [isRunning]);


  return (
    <div className="container">
      <Title text='Simple Counter' color='success' />
      <h2 className={`text-${subtitle.color}`}>{subtitle.text}</h2>
      <div className="big-counter">
        <div><i className={`fa fa-${icon} fa-lg`}></i></div>
        <div>{Math.floor(counter / 10000000 % 10)}</div>
        <div>{Math.floor(counter / 1000000 % 10)}</div>
        <div>{Math.floor(counter / 100000 % 10)}</div>
        <div>{Math.floor(counter / 10000 % 10)}</div>
        <div>{Math.floor(counter / 1000 % 10)}</div>
        <div>{Math.floor(counter / 100 % 10)}</div>
        <div>,</div>
        <div>{Math.floor(counter / 10 % 10)}</div>
        <div>{Math.floor(counter % 10)}</div>
        <div>
          <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button onClick={handleStart} type="button" className="btn btn-outline-success">{start}</button>
            <button onClick={handleReset} type="button" className="btn btn-outline-danger">{'Reset'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
