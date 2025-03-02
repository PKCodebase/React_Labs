import { Component } from 'react'; 
import './App.css'; 
import Student from './student/Student'; 
class App extends Component { 
 
 state = { 
 myheader: "Welcome to Java Learning Center", 
 student:{
    sid:102, 
    sname:"kaushik", 
    email:"kaushikprasad1659@gmail.com", 
    phone:8709252029, 
    city:"Banglore",

    course:{
     cId:"113",
     cName:"React",
     price:70000,
     trainer:"srinivas"
    }
}
    
 } 
 render(){ 
 console.log("I am App Component"); 
 return ( 
 <div className="myheader"> 
 <p> {this.state.myheader} </p> 
 <br/> 
 <Student  mystudent={this.state.student}/> 
 </div> 
 ); 
 } 
 } 
export default App; 
