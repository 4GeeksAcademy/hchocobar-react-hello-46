import React, { useState } from "react";


export const Todolist = () => {
  // estados
  const [task, setTask] = useState("");
  const [list, setList] = useState(['tarea 1', 'tarea 2']);


  // Funcion onClick del icono trash
  const deleteTask = (item) => {
    setList(list.filter((element, id) => {
      return item !== element;
    }))
  };


  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      return
    };
    setList([...list, task]);
    setTask("");
  }

  
  return (
    <div className="container col-xs-10 col-md-8 col-lg-6 my-3">
      <h1 className="text-center">Todos</h1>
      {/* Formulario para agregar tareas */}
      <div className="mb-3">
        <form onSubmit = {addTask}>
          <input className="form-control" placeholder="Write a new task" type="text" 
              value={task} 
              onChange={(event)=>{setTask(event.target.value);}}/>
        </form>
      </div>


      {/* Lista de Tareas */}
      <h2 className="text-primary">Todos List</h2>
      <div className="list">
        <ul className="list-group">

          {list.map((item, id) => {
            return <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
                {item}
                <span key={id} onClick={() => {deleteTask(item)}}>
                  <i className="fas fa-trash text-danger"></i>
                </span>
              </li>
            })
          }

          <span className="list-group-item bg-light text-end fw-lighter">
              {list.length === 0 ? "No tasks, add a task" : list.length + " Item Left"}
          </span>
        </ul>
      </div> 
    </div>
  );
};

// agregar el contenido finla del input en el estado list 