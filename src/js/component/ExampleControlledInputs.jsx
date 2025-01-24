import React, { useState } from "react";


export const ExampleControlledInputs = () => {
  // Controlar imputs
  // 1. defino un estado por cada input
  // 2. asigno el valor del estado al atributo value / checked
  // 3. ante el evento onChange actualizo el estado mediante el setter
  const [ email, setEmail ] = useState('hola@test.com');
  const [ password, setPassword ] = useState('1234');
  const [ checkMe, setCheckMe ] = useState(false);
  const [ viewPassword, setViewPassword ] = useState(false)


  // opción 1
  const handleEmail = (event) => { 
    setEmail(event.target.value.toLowerCase()) 
    // intruccion 2
    // intrucción 3
  }
  // opción 2
  // const handleEmail = event => setEmail(event.target.value);
  const handleCheckMe = (event) => setCheckMe(event.target.checked);

  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
  }

  const handelSubmit = (event) => {
    event.preventDefault();   // siempŕe, si o si, la primera instrucción de mi event submit
    // Opción 1
    /* const dataToSend = {
      email: email,
      password: password,
      accept: checkMe
    } */
    const dataToSend = { email, password, checkMe }
    console.log(dataToSend)
    // lógica del formulario
    // - validar datos
    // - enviar esos datos a algun lado
    // - me voy otra vista 
    
  }

  return (
    <div className="container">
      <h1>Controlled Inputs</h1>
      <div className="row text-start">
        <div className="col-10 col-md-6 col-lg-4 m-auto">
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                value={email} onChange={handleEmail} placeholder="Input your email"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <div className="input-group">
                <input type={viewPassword ? 'text' : 'password'} className="form-control" id="exampleInputPassword1" 
                  value={password} onChange={event => setPassword(event.target.value)}/>
                <div className="input-group-text" onClick={handleViewPassword}>
                  { viewPassword ? 
                  <i className="fa fa-eye-slash text-danger"></i>
                  :
                  <i className="fa fa-eye text-primary"></i>
                  }
                </div>
              </div>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                checked={checkMe} onChange={handleCheckMe}/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mx-2">Submit</button>
              <button type="reset" className="btn btn-secondary mx-2">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
