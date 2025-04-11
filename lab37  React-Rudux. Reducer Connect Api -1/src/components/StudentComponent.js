import React from "react"
import {connect} from "react-redux"
const StudentComponent=(props)=>{

    const{studentId,studentName,email,phone} = props.myStudentData;


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
const mapStateToProps = (state)=>{
    return {
        myStudentData:state.mystudent
    }
}

export default connect(mapStateToProps)(StudentComponent);