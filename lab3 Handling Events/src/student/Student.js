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
 showStudent:false,
 } 

 showStudentInfo = () =>
  {
    console.log("Button is clicked")
    let studentFlag = this.state.showStudent

    this.setState(
      {
        showStudent: !studentFlag
      }
    );

  }
 
 render(){ 
  let mystudentInfo = null
  if(this.state.showStudent === true){
    mystudentInfo = (
<div className="mystudent"> 
 <p> Sid : {this.state.sid}</p> 
 <p> Sname : { this.state.sname}</p> 
 <p> Email : { this.state.email}</p> 
 <p> Phone : { this.state.phone}</p> 
 <p> City : { this.state.city}</p>
 <Course/> 
 </div>  
    );
}
 console.log("Student- render()"); 
 return( 
  <div>
  <button className='mybutton' onClick={this.showStudentInfo}>Student  Info</button>
  {mystudentInfo}

 </div>
  ); 
  } 
} 
export default Student; 
