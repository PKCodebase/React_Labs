import React from "react"; 
 
import { useSelector } from "react-redux"; 
 
const TestComponent = (props) => { 
 
const mydata = useSelector(state => state); 
 
const { studentId, studentName, email, phone } = mydata.mystudent; 
const { courseId, courseName, price, trainer } = mydata.mycourse; 
 
    return ( 
        <div className="container"> 
            <br /> 
            <b><u>  <h2 className="text-left"> Student Info</h2>  </u> </b> 
            <br /> 
            <div className="text-left"> 
                <h4> Student ID : {studentId}</h4> 
                <h4> Student Name : {studentName}</h4> 
                <h4>Email Id: {email}</h4> 
                <h4> Phone No : {phone}</h4> 
            </div> 
 
            <br /> 
                <b><u>   
                    <h2 className="text-left"> Course Info</h2>  </u> </b> 
                <br /> 
                <div className="text-left"> 
                <h3> Course Id: {courseId}</h3> 
                <h3> Course Name : {courseName}</h3> 
                <h3> Price : {price}</h3> 
                <h3> Trainer : {trainer}</h3> 
                </div> 
        </div> 
 
    ); 
} 
 
export default TestComponent; 