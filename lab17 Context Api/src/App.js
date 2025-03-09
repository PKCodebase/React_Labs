import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LeadList from "./components/LeadsList";
import { MyApplicationData } from "./appContext";


class App extends Component{
  render(){
    return(

      //div is the root of our entire app

      //Appcontext provider is available for all the components
      <MyApplicationData>
      <div className="App container">
      <Header mybrand="Lead Manager"/>
      <LeadList/>
     </div>
      </MyApplicationData>
    );
  }
}
export default App;
