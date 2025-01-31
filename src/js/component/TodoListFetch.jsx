import React, { useState, useEffect } from "react";


export const TodoListFetch = () => {
  const host = 'https://playground.4geeks.com/todo';
  const user = 'sp-93';
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask ] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const uri = `${host}/users/${user}`;
    const options = {
      method: 'GET'
    }
    const response = await fetch(uri, options);
    if (!response.ok) {
      // trato el error
      console.log('Error', response.status, response.statusText)
      return  // Importante
    }
    const data = await response.json();
    // logica... asignar data.todos a el estado todos
    setTodos(data.todos)
  }
  
  const addTodos = async () => {
    const dataToSend = {
      label: newTask,
      is_done: false
    }
    const uri = `${host}/todos/${user}`;
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    }
    const response = await fetch(uri, options)
    if (!response.ok) {
      // trato el error
      console.log('Error', response.status, response.statusText)
      return   // importante
    }
    const data = await response.json()   // en este caso no nos hace falta
    // lógica posterior
    getTodos()
  }

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    // console.log(newTask);
    // ejecutar el fetch del Post de un Todo
    addTodos()
    setNewTask('')
  }
  
  const handleSubmitEdit = (event) => {
    event.preventDefault();
  }
  
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className="container">
      <h1>Todo List with Fetch</h1>

      <form onSubmit={handleSubmitAdd}>
        Add Task
        <input type="text" onChange={event => setNewTask(event.target.value)} value={newTask}></input>
      </form>


      <form onSubmit={handleSubmitEdit} className="text-start">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Edit Task</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={event => setEditTask(event.target.value)} value={editTask}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"
              onChange={event => setIsDone(event.target.checked)} checked={isDone}/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>


      <ul className="list-group">
        {todos.map((iterator) => 
        <li key={iterator.id} className="list-group-item">
          {iterator.label} - {iterator.id} - {iterator.is_done ? 'verdadero' : 'falso'}
        </li>)}
      </ul>
    </div>

  )

}