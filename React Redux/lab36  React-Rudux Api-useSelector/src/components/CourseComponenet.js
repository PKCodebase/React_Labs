
import React from "react";
import { useSelector } from "react-redux";


const CourseComponent = (props)=>{
        
          const mycourseData = useSelector(state=>state.mycourse);

          // const mycourseData = useSelector(state=>state.mycourse.Id);
          //Now we get only id


        const {courseId,courseName,price,trainer}=mycourseData;    
                    return(
                      <div className="container">
                        <br/>
                        <u>
                            <h2 >Course Info</h2>
                        </u>
                        <br/>
                        <div>
                            <h3>Course Id: {courseId}</h3>
                            <h3>Course Name: {courseName}</h3>
                            <h3>Course price: {price}</h3>
                            <h3>Course trainer: {trainer}</h3>
                        </div>
                      </div>

                    );
                }
               
       
export default CourseComponent;
