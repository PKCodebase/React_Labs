import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from "./Hello";
import Hai from "./Hai";
import MyCourses from "./MyCourses";
class App extends Component { 
 
   constructor(props){
      super(props);
      console.log(1,"App-Constructor");
      this.state={
         name:"kaushik",
         courseFlag:true,
      }
   }


   static getDerivedStateFromProps(myprops,mystate){
      console.log(2, "App-getDerivedStateFromProps");
      return null;
   }

   componentDidMount(){
         console.log(4,"App-componentDidMount");
   }
   shouldComponentUpdate(nextProps,nextState){
      console.log("App--shouldComponentUpdate");
      return true;
   }
   getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("App--getSnapshotBeforeUpdate");
      return null;
   }
   componentDidUpdate(prevProps, prevState, mysnapshot){
      console.log("App -- componentDidUpdate");
   }
   componentWillUnmount(){
      console.log(5, "App componentWillUnmount");
   }

   showHideCourses = () =>{
      let mycourseFlag = this.state.courseFlag;
      this.setState({
         courseFlag:!mycourseFlag
      });
   }

    render(){
      console.log(3,".App-render");

      let displayCourse = null;
      if(this.state.courseFlag===true){
         displayCourse=(
            <MyCourses hello="Hello Guys" 
            hai = "Hai Guys"/>
         );
      }

      return(
       <div className="container"> 
        <h1 className="text-center">Welcome to {this.state.name} Page!!!</h1>
        <br/>

        <button className="btn btn-danger" onClick={this.showHideCourses}> Show Hide Corses</button>
        <br/>
        <br/>
        {displayCourse}
        <br/>
        <table className="table bordered">
         <tbody>
            <tr>
              
               <td><Hello mytrainer="kaushik"/></td>
               {/* <td><Hai mycolor="green"/></td> */}
            </tr>
         </tbody>
        </table>
        
        </div> 
      
       );
    }

 }
export default App; 
