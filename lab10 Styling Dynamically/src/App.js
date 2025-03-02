import React, { Component } from "react";
import "./App.css";
class App extends Component { 
 
  state = {
     name:"kaushik prasad",
     styleFlag:false,
     classFlag:false
    };
    changeStyles = () =>{
      let myflag = this.state.styleFlag;
      this.setState({
          styleFlag :!myflag
      });
    }
    changeClass = () =>{
      let myflag = this.state.classFlag;
      this.setState({
          classFlag :!myflag
      });
    }
    
    render(){
      let mystyles = {
        color:"blue",
        fontSize:"20px",
        border:"2px solid red",
        borderRadius:"5px",
        padding:"10px"
      }
      if(this.state.styleFlag===true){
        mystyles = {
          color:"red",
          fontSize:"20px",
          border:"2px solid blue",
          borderRadius:"5px",
          //backgroundColor:"green",
          padding:"10px"
        };
      }
      else{
          mystyles = {
            color:"blue",
            fontSize:"20px",
            border:"2px solid red",
            borderRadius:"5px",
            //backgroundColor:"yellow",
            padding:"10px"
          };
        }
        let myclassList = ["myclass1","myclass2"];

        if(this.state.classFlag===true){
          myclassList.push("myred");
        }else{
          myclassList.push("myblue");
        }
        
      return(
        <div className="container">
          <h2 className="text-center">Welcome to kaushik page</h2>
          <br/>
          <p>1.Applying Styles - Static way</p>
          <div style={{color:"red",fontSize:"20px",border:"2px solid blue",borderRadius:"5px",padding:"10px"}}>
          My name is { this.state.name }</div>
          <br/>
          <p>2.Applying Styles - Dynamic way</p>
          <div style={mystyles}>
          My name is { this.state.name }
          </div>
          <br/>
          <br/>
          <button onClick={this.changeStyles} className="btn btn-success ">Change Styles</button>
          <br/>
          <br/>
          <p>3.Applying Class - Static way</p>
          <div className= "myclass1 myclass2 myblue">
          My name is { this.state.name }
          </div>
          <br/>
          <br/>
          <br/>
          <p>4.Applying Class - Dynamic way</p>
          <div className= {myclassList.join(" ")}>
          My name is { this.state.name }
          </div>
          <br/>
          <button onClick={this.changeClass} className="btn btn-success ">Change Class</button>
        </div>
       );
    }

 }
export default App; 
