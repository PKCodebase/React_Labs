import { Component } from 'react'; 
import './App.css'; 
import Student from './student/Student'; 
class App extends Component { 
 
 state = { 
 myheader: "Welcome to Java Learning Center", 
 } 
 render(){ 
 console.log("I am App Component"); 
 return ( 
 <div className="myheader"> 
 <p> {this.state.myheader} </p> 
 <br/> 
 <Student/> 
 </div> 
 ); 
 } 
 } 
export default App; 
