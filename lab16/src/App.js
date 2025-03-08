import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LeadList from "./components/LeadsList";


class App extends Component{
  render(){
    return(
     <div className="App container">
      <Header mybrand="Lead Manager"/>
      {/* <Header/> */}
      <LeadList/>
     </div>
    );
  }
}
export default App;
