import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyStudentProvider } from "./studentContext";
import StudentComponent from "./StudentComponent";
import { MyCourseProvider } from "./courseContext";
import CourseComponent from "./CourseComponenet";
import TestComponent from "./TestComponent";


class App extends Component{
  render(){
    return(
      <MyStudentProvider>
        <MyCourseProvider>
      <div className="container">
     <StudentComponent/>
     <CourseComponent/>
     <hr/>
     <TestComponent/>
     </div>
     </MyCourseProvider>
     </MyStudentProvider>
    );
  }
}
export default App;
