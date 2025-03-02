import React, { Component } from 'react'; 
import Course from '../course/Course'; 
import '../student/Student.css'; 
class Student extends Component{ 
 state={ 
 sid:101, 
 sname:"kaushik", 
 email:"kaushikprasad1659@gmail.com", 
 phone:8709252029, 
 city:"Banglore",
 course:{
  cId:"112",
  cName:"React",
  price:70000,
  trainer:"srinivas"
 }
 } 
 
 render(){ 
 return( 
  <div className="mystudent"> 
 <p> Sid : {this.state.sid}</p> 
 <p> Snsame : { this.state.sname}</p> 
 <p> Email : { this.state.email}</p> 
 <p> Phone : { this.state.phone}</p> 
 <p> City : { this.state.city}</p>
 <Course mycid={this.state.course.cId}
         mycname= {this.state.course.cName}
         myprice={this.state.course.price}
         mytrainer={this.state.course.trainer}/> 
 </div>  
  );  
  } 
} 
export default Student; 
