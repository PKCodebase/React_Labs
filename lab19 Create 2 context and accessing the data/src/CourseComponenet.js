
import React, { Component } from "react";
//whenever you wnat to use context data then
//1.import this
import { MyCourseConsumer } from "./CourseContext";

class CourseComponent extends Component{
    render(){
        return(
            //2
          <MyCourseConsumer>
               {
                //Variable name
                mycourseData=>{
                     const {courseId,courseName,price,trainer}=mycourseData;    
                    return(
                      <div className="container">
                        <br/>
                        <u>
                            <h2 className="text-center">Course Info</h2>
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
               }
           </MyCourseConsumer>
        );
    }

}
export default CourseComponent;