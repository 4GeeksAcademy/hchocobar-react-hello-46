import React, { useState } from "react";  // 1 Importar React y los hooks que necesite


// 5 y 2
export const ExampleState = () => {
  // 3  Code JS
  // setter: es la función que cambia el valor de esa variable
  //        variable, setter   
  // const [variable, setVariable ] = useState(valor inicial);
  const [ text, setText ] = useState('Hola Mundo');
  const [ counter, setCounter] = useState(0);
  const [ background, setBackground ] = useState('warning')
  
  const initialise = () => {
    setText('Hola Mundo');  // opción 1 (correcta)
    setCounter(0)
    setBackground('warning')
    // text = 'Hola Mundo';  // opción 2 (incorrecta)
  }

  const reset = () => {
    setText('');
    setCounter(0)
    setBackground('warning')
  }

  // 4
  return (
    <div className="container">
      <div className={`alert alert-${background}`} role="alert">
        {counter} - {text}
      </div>
      <button onClick={initialise} type="button" className="btn btn-primary">Valores iniciales</button>
      <button onClick={() => setText(text.toUpperCase())} type="button" className="btn btn-secondary">Mayúsculas</button>
      <button onClick={() => setText(text.toLowerCase())} type="button" className="btn btn-success">Minúsculas</button>
      <div className={`alert alert-${background} mt-2`} role="alert">
        {counter}
      </div>
      <button onClick={() => setCounter(counter + 1) } type="button" className="btn btn-danger">Incrementar</button>
      <button onClick={() => setCounter(counter - 1)} type="button" className="btn btn-warning">Decrementar</button>
      <button onClick={() => setCounter(counter * 2)} type="button" className="btn btn-info">Duplicar</button>
      <button onClick={reset} type="button" className="btn btn-dark">Reset</button>
      <hr/>
      <button onClick={() => setBackground('primary')} type="button" className="btn btn-primary">Azul</button>
      <button onClick={() => setBackground('success')} type="button" className="btn btn-success">Verde</button>
      <button onClick={() => setBackground('danger')} type="button" className="btn btn-danger">Rojo</button>
      <button onClick={() => setBackground(' d-none')} type="button" className="btn btn-dark">Ocultar</button>

    </div>
  )

}

// 7 y 6
