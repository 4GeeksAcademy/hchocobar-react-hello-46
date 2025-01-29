import React, { useEffect, useState } from "react";


export const ExampleFetch = () => {
  const [ users, setUsers ] = useState([
    {name: 'Connor'}, 
    {name: 'Mauro'}
  ])
  const host = 'https://jsonplaceholder.typicode.com';


  // Esta función va a contener algunas instrucciones que demoran en resolverse
  // por eso la defino como asincrona
  const getUsers = async () => {
    // Vamos a realizar un GET de los Users
    // 1. defino la uri (string) del fetch() 
    const uri = `${host}/users`;
    // 2. defino las options (objeto) del fetch()
    const options = {
      method: 'GET'
    }
    // 3. ejecuto el fetch() con los dos dos parámetros y lo asigno a un constante
    // cuidado que instrucción demora
    const response = await fetch(uri, options)
    // 4. Verifico si el response me responde ok
    console.log(response)
    if (!response.ok) {
      // 4.1 Trato el error 
      console.log('Error:', response.status, response.statusText)
      return
    }
    // 5. Extraigo los datos json del response, 
    // cuidado que esto demora!
    const data = await response.json()
    // 6. Realizo la lógica de mi función
    setUsers(data)
  }

  useEffect(() => {
    getUsers();  
  }, [])

  return (
    <div className="container">
      <h1 className="text-center text-success">Example Fetch()</h1>
      <ul className="list-grop">
        {users.map((iterator, index) => 
          <li key={index} className="list-group-item">{iterator.name}</li>
        )}
      </ul>
    </div>
  )
}