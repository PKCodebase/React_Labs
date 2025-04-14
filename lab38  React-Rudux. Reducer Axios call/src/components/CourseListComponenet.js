import React from "react";
import { useSelector,useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import { fetchAllCourses } from "../myredux/course/courseAction";


const CourseListComponent = ({mycourseData,courseDispatch}) => {


    useEffect(() => { 
        courseDispatch(fetchAllCourses()); 
    }, []);

    let messageToDisplay = null; 
    if (mycourseData.loadingStatus) { 
        messageToDisplay = "Loading .....Please Wait.... "; 
    } else if (mycourseData.error) { 
        messageToDisplay = mycourseData.error.message; 
    } 
 
    let coursesToDislay = null; 
    if (mycourseData && mycourseData.courseList) { 
        coursesToDislay = mycourseData.courseList; 
    }

    const mycourseList = coursesToDislay.map(
        mycourses =>{
         return ( 
                <tr key={mycourses.courseId}> 
                    <td> {mycourses.courseId} </td> 
                    <td> {mycourses.courseName} </td> 
                    <td> {mycourses.duration} </td> 
                    <td> {mycourses.trainer} </td> 
                    <td> {mycourses.enrollments} </td> 
                </tr> 
            ); 
        } 
        
    )
    return ( 
        <div className="container"> 
 
            <table className="table"> 
                <thead> 
                    <tr> 
                        <th> Course ID</th> 
                        <th> Course Name</th> 
                        <th> Duration</th> 
                        <th> Trainer</th> 
                        <th> Enrollments</th> 
                        <th> </th> 
                    </tr> 
                </thead> 
                <tbody> 
                    {mycourseList} 
                </tbody> 
            </table> 
            <h2 className="text-center"> {messageToDisplay} </h2> 
 
        </div> 
    ); 
} 
const mapState = state =>{
    return {
        mycourseData : state.mycourses
    }
}

const mapDispatch = dispatch =>{
    return{
        courseDispatch : dispatch,
    }

}
// export default CourseComponent;
export default connect(mapState,mapDispatch) (CourseListComponent);
