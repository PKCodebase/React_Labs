import React, { Component } from 'react'; 
import Course from '../course/Course'; 
import '../student/Student.css'; 
class Student extends Component{ 
 
 render(){ 
 return( 
  <div className="mystudent"> 
 <p> Sid : {this.props.mystudent.sid}</p> 
 <p> Snsame : { this.props.mystudent.sname}</p> 
 <p> Email : { this.props.mystudent.email}</p> 
 <p> Phone : { this.props.mystudent.phone}</p> 
 <p> City : { this.props.mystudent.city}</p>
 <Course mycourse={this.props.mystudent.course}/> 
 </div>  
  );  
  } 
} 
export default Student; 
