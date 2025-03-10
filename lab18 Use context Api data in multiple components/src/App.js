import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyStudentProvider } from "./StudentContext";
import StudentComponent from "./StudentComponent";
import StudentComponent1 from "./StudentComponent";


class App extends Component{
  render(){
    return(

      //div is the root of our entire app

      //Appcontext provider is available for all the components
      <MyStudentProvider>
      <div className="container">
     <StudentComponent/>
     <StudentComponent1/>
     </div>
     </MyStudentProvider>
    );
  }
}
export default App;
