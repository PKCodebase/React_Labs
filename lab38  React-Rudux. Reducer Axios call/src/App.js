import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from 'react-redux';
import mystore from "./myredux/mystore";
import CourseListComponenet from "./components/CourseListComponenet";

class App extends Component{
  render(){
    return(
      <Provider store={mystore}>
      <div className="container">
       <h3>Welecome to PkCodebase!!</h3>
       <hr/>
       <CourseListComponenet/>
     </div>
     </Provider>
    );
  }
}
export default App;
