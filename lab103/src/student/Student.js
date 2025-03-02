import { Component } from "react";
import "./Student.css";
import Course from '../course/Course';


class Student extends Component{

    state = {
        sid:101,
        sname:"Kaushik",
        email:"kp@gmail.com",
        phone:12345,
        city:"Blore",
        showStudent:false
    }

    showStudentInfo = () =>{
        let clickStudent = this.state.showStudent;
        this.setState({
            showStudent:!clickStudent
        })

    }



    render(){
        console.log("I am Student")
      let mystudentInfo = null;
      if(this.state.showStudent===true){
      mystudentInfo =(
      <div className="mystudent">
        <p>Sid : {this.state.sid}</p>
        <p>Sname : {this.state.sname}</p>
        <p>Email : {this.state.email}</p>
        <p>Phone : {this.state.phone}</p>
        <p>City : {this.state.city}</p>
        <br/>
        <br/>
        <Course/>
    </div>
      
    );
}


        return(
            <div>
                <button className="mybutton" onClick={this.showStudentInfo}>Student Info</button>
                {mystudentInfo}
            </div>

        );
    }
}

export default Student;