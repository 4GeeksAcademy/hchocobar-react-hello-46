import React from "react";  // 1
import { BtnCallToAction } from "./BtnCallToAction.jsx";;


// 5 y 2
export const Jumbotron = () => {
  // 3

  // 4
  return (
    <div className="container">
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
        <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
        <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
        <p className="col-lg-6 mx-auto mb-4">
          This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
        </p>
        <BtnCallToAction/>
      </div>
    </div>
  )

}

// 6 y 7

