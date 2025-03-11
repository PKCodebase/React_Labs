
import React, { Component } from "react";
//whenever you wnat to use context data then
//1.import this
import { MyCourseConsumer } from "./CourseContext";

class CourseComponent extends Component{

   updateCourseName = (updatedCname,mydispatch) =>{
    console.log("A","updateCourseName",updatedCname);
    mydispatch({
        type:"updateName",
        payload:updatedCname
    });
   }
   
   updateCoursePrice = (updatedCprice,mydispatch) =>{
    console.log("A","updateCourseName",updatedCprice);
    mydispatch({
        type:"updatePrice",
        payload:updatedCprice
    });
   }

   updateCourseDuration = (updatedDuration,mydispatch) =>{
    console.log("A","updateCourseName",updatedDuration);
    mydispatch({
        type:"updateDuration",
        payload:updatedDuration
    });
   }
  
   updateCourseTrainer = (updatedTrainer,mydispatch) =>{
    console.log("A","updateCourseName",updatedTrainer);
    mydispatch({
        type:"updateTrainer",
        payload:updatedTrainer
    });
   }



    render(){
        return(
            //2
          <MyCourseConsumer>
               {
                //Variable name
                mycourseData=>{
                     const {courseId,courseName,price,duration,trainer}=mycourseData;
                     const {mydispatch}=mycourseData;    
                    return(
                      <div className="container">
                        <br/>
                        <u>
                            <h2 className="text-center">Course Info</h2>
                        </u>
                        <br/>
                        <div>
                            <table>
                                <tbody>

                                    <tr>
                                        <td><h4>Course Id:{courseId}</h4></td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td><h4>Course Name:{courseName}</h4></td>
                                        <td>
                                            <button onClick={this.updateCourseName.bind(this,"React",mydispatch)} className="btn btn-success">
                                            Update Course Name
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><h4>Course price:{price}</h4></td>
                                        <td><button onClick={this.updateCoursePrice.bind(this,10000,mydispatch)} className="btn btn-success">
                                            Update  Price
                                            </button></td>
                                    </tr>

                                    <tr>
                                        <td><h4>Course duration:{duration}</h4></td>
                                        <td><button onClick={this.updateCourseDuration.bind(this,"20hrs",mydispatch)} className="btn btn-success">
                                            Update  Duration
                                            </button></td>
                                    </tr>

                                    <tr>
                                        <td><h4>Course trainer:{trainer}</h4></td>
                                        <td><button onClick={this.updateCourseTrainer.bind(this,"kaushik",mydispatch)} className="btn btn-success">
                                            Update  Trainer
                                            </button></td>
                                    </tr>
                                </tbody>
                            </table>
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