import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyCourseProvider } from "./CourseContext";
import CourseComponent from "./CourseComponenet";



class App extends Component{
  render(){
    return(
      
        <MyCourseProvider>
      <div className="container">
     <CourseComponent/>
     <hr/>
     
     </div>
     </MyCourseProvider>
     
    );
  }
}
export default App;
