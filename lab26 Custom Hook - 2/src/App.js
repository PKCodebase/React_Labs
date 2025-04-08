import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HelloComponent from "./HelloComponent";
import HaiComponent from "./HaiComponent";


const App = () => {
  console.log("App rendered");
  return(
    <div className="container">
      <HelloComponent/>
      <br/>    <br/>
      <HaiComponent/>
    </div>
  )
};

export default App;
