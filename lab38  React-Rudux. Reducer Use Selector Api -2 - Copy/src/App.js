import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from 'react-redux';
import mystore from "./myredux/mystore";
import CourseComponenet from "./components/CourseComponenet";

class App extends Component{
  render(){
    return(
      <Provider store={mystore}>
      <div className="container">
       <h3>Welecome to PkCodebase!!</h3>
       <hr/>
       <CourseComponenet/>
     </div>
     </Provider>
    );
  }
}
export default App;
