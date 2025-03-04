import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from "./Hello";
class App extends Component { 
 
   constructor(props){
      super(props);
      console.log("App-Constructor");
      this.state={
         name:"kaushik"
      }
   }

    render(){
      console.log(".App-render");
      // console.log(2,"App-static variable",App.displayName)
      // console.log(3,"App -static variable",App.defaultProps)
      // console.log(4,"App",this.state)
      // console.log(5, "App", this.props)

      return(
       <div className="container"> 
        <h1 className="text-center">Welcome to kaushik page!!</h1>
        <br/>
        <Hello  mytrainer="Srinivas" mycolor="red"/>
        </div> 
      
       );
    }

 }
export default App; 
