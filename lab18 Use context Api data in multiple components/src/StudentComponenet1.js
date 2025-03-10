
import React, { Component } from "react";
//whenever you wnat to use context data then
//1.import this
import { MyStudentConsumer } from "./StudentContext";

class StudentComponent1 extends Component{
    render(){
        return(
            //2
           <MyStudentConsumer>
               {
                //Variable name
                mystudentData=>{
                    const {studentId,studentname,email,phone}=mystudentData;
                    return(
                      <div className="container">
                        <br/>
                        <u>
                            <h2 className="text-center">Student Info</h2>
                        </u>
                        <br/>
                        <div>
                            <h3>Student Id: {studentId}</h3>
                            <h3>Student Name: {studentname}</h3>
                            <h3>Student Email: {email}</h3>
                            <h3>Student Phone: {phone}</h3>
                        </div>
                      </div>

                    );
                }
               }
           </MyStudentConsumer>
        );
    }

}
export default StudentComponent1;