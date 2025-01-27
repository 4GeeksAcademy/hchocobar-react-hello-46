import React, { useState } from "react";


export const TodoList = () => {
  const [ newTask, setNewTask ] = useState('');
  const [ todos, setTodos ] = useState([]);

  const handleDelete = (task) => {
    setTodos(todos.filter((item) => task !== item))
  }

  const handleTask = (event) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();  // regla de oro del submit
    // verificar que tengo algo distinto a vacío o espacions en blanco
    if (newTask.trim() != '') {
      // agregarlo al array todos
      setTodos([...todos, newTask])
    }
    setNewTask('')
  }

  return (
    <div className="container">
      <h1 className="text-center">Todo List with React</h1>
      <h2 className="text-center text-success">Add Task</h2>
      {/* Formulario para agregar tarea */}
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" placeholder="Add a new task"
          value={newTask} onChange={handleTask}/>
      </form>

      <h2 className="text-center text-success mt-2">Todo List</h2>
      {/* ul y el map para mostrar los datos del array */}
      <ul className="list-group">
        {todos.map((iterator, index) => 
          <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">
            {iterator}
            <span onClick={() => handleDelete(iterator)}>
              <i className="fa fa-trash text-danger"></i>
            </span>
          </li> 
        )}
        <li className="list-group-item list-group-item-secondary text-end pe-2">{todos.length} task</li>
      </ul>

    </div>
  )
}