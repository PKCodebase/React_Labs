import React from "react";
import { useContext } from "react";
//whenever you wnat to use context data then
//1.import this
import { MyStudentConsumer } from "./studentContext";

const StudentComponent  = ()=>{

    //2.useContext()
    const mystudentData = useContext(MyStudentConsumer);
    const {studentId,studentname,email,phone} = mystudentData;
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


export default StudentComponent;