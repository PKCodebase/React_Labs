
import React, { Component } from "react";
//whenever you wnat to use context data then
//1.import this
import { MyStudentConsumer } from "./StudentContext";

class StudentComponent extends Component{
    render(){
        return(
            //2
           <MyStudentConsumer>
               {
                //Variable name
                mystudentData=>{
                    return(
                      <div className="container">
                        <br/>
                        <u>
                            <h2 className="text-center">Student Info</h2>
                        </u>
                        <br/>
                        <div>
                            <h3>Student Id: {mystudentData.studentId}</h3>
                            <h3>Student Name: {mystudentData.studentname}</h3>
                            <h3>Student Email: {mystudentData.email}</h3>
                            <h3>Student Phone: {mystudentData.phone}</h3>
                        </div>
                      </div>

                    );
                }
               }
           </MyStudentConsumer>
        );
    }

}
export default StudentComponent;