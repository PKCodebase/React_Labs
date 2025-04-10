import React from "react"
import { useSelector } from "react-redux";

const StudentComponent=(props)=>{

    const myStudentData = useSelector(state =>state.mystudent)
    const{studentId,studentName,email,phone} = myStudentData;


    return(
        <div className="conatiner">
            <br/>
            <u>
                <h2>Student Info</h2>
            </u>
            <br/>
            <div>
                <h4>Student ID : {studentId}</h4>
                <h4>Student Name : {studentName}</h4>
                <h4>Email : {email}</h4>
                <h4>Phone : {phone}</h4>
            </div>
        </div>
    )
}


export default StudentComponent;