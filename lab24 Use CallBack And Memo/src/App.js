import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TestComponent from "./TestComponent";

const App = () => {
  console.log("App rendered");
  return(
    <div className="container">
      <TestComponent/>
    </div>
  )
};

export default App;
