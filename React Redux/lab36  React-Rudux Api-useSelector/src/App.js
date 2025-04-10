import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from 'react-redux';
import mystore from "./myredux/mystore";
import CourseComponenet from "./components/CourseComponenet";
import StudentComponent from "./components/StudentComponent";
import TestComponent from "./components/TestComponents";

class App extends Component{
  render(){
    return(
      <Provider store={mystore}>
      <div className="container">
       <h3>Welecome to PkCodebase!!</h3>
       <hr/>
       <CourseComponenet/>
       <hr/>
       <StudentComponent/>
       <hr/>
       <TestComponent/>

     </div>
     </Provider>
    );
  }
}
export default App;
