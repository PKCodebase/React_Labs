import React, { Component } from "react";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component { 
 
  state = {
    name:"kaushik ",
    styleFlag:false,
    classFlag:false


   
    };

   changeStyles = ()=>{
    let myflag = this.state.styleFlag;
    this.setState({
      styleFlag:!myflag
    })
   }
   changeClasses=()=>{
    let myflag = this.state.classFlag;
    this.setState({
      classFlag:!myflag
    })
   }

    render(){
      let mystyle={
        color:'green',
        fontSize:'30px',
        border:'2px solid blue',
        borderRadius:'5px',
        padding:'10px',
        fontFamily: 'Cambria'
     
      }; 
      if(this.state.styleFlag === true){
        mystyle={
          color:'red',
          fontSize:'30px',
          border:'2px solid black',
          borderRadius:'5px',
          padding:'10px',
          fontFamily: 'Cambria'
        };
      } else{
          mystyle={
            color:'green',
            fontSize:'30px',
            border:'2px solid blue',
            borderRadius:'5px',
            padding:'10px',
            fontFamily: 'Cambria'
          }
  
      } 

      let myclassList = ["myclass1","myclass2"];
      console.log(myclassList.join(""));

      if(this.state.classFlag == false){
        myclassList.slice(2,1);
        myclassList.push("myred");
      }else{
        myclassList.slice(2,1);
        myclassList.push("myblue");
  
      }
      return(
        <div className="container"> 
        <h2 className="text-center"> Welcome to Java Learning Center</h2>
        <br/> 
        <p>1.Applying Styles - Static Way </p>
        <div style={{color:'pink',fontSize:'30px',border:'2px solid black',borderRadius:'5px',padding:'10px',fontFamily: 'Cambria'
         }}>
        My name is {this.state.name} 
        </div>
        <br/>
        <p>2.Applying Styles - Dynamic way</p>
        <div style={mystyle}>
         I am lerning React Js
        </div>
        <br/>
        <button onClick={this.changeStyles} className="btn btn-success">Change Style</button>
        <br/>
        <br/>
        <p>3.Applying classes - Staic way</p>
        <div className="myclass1 myclass2 myred">
          I am lerning Springboot
        </div>
        <p>4.Applying classes - Dynamic way</p>
        <div className={myclassList.join(" ")}>
          I am Java Developer
          </div>
          <br/>
          <button onClick={this.changeClasses} className="btn btn-success" >Change Classes</button>
        </div>
       );
    }

 }
export default App; 
