import React, { useEffect, useState } from "react";


export const ExampleFetchComplex = () => {
  const [ characters, setCharacters ] = useState([])
  const base_url = 'https://swapi.tech/api';


  // Esta función va a contener algunas instrucciones que demoran en resolverse
  // por eso la defino como asincrona
  // 0. funcion asincrona: async
  const getCharacters = async () => {
    // 1. uri
    const uri = `${base_url}/people`
    // 2. options
    const options = {
      method: 'GET'
    }
    // 3. fetch() al response y lo espero
    const response = await fetch(uri, options)
    // 4. verifico si el response.ok me dió fallo
    if (!response.ok) {
      // 4.1 Trato el error y me voy
      console.log('Error:', response.status, response.statusText)
      return;     // MUY IMPORTANTE
    }
    // 5. Recupero los datos json del body y lo espero (a veces no es necesario)
    const data = await response.json()
    // 6. Ejecuto mi lógica
    console.log('Soy el contenido de data', data);
    setCharacters(data.results)
    

  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <div className="container">
      <h1 className="text-center text-success">Example Fetch() Complex</h1>
      <ul className="list-group">
        {characters.map((iterator) => 
          <li key={iterator.uid} className="list-group-item">{iterator.name}</li>
        )}
      </ul>
    </div>
  )
}