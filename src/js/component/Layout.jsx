import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
// Importar los Custom Component
import { Jumbotron } from './Jumbotron.jsx';

export const Layout = () => {

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jumbotron />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
