import React from "react";
import { useSelector,useDispatch } from "react-redux";

import {updateCname} from "../myredux/course/courseAction";
import {updatePrice} from "../myredux/course/courseAction";
import {updateTrainer} from "../myredux/course/courseAction";
import {updateDuration} from "../myredux/course/courseAction";

const CourseComponent = () => {

  const mycourseData = useSelector(state => state.mycourse);
  const { courseId, courseName, price, trainer,duration } = mycourseData;

  const courseDispatch = useDispatch(); 

  return (
    <div className="container">
      <br />
      <u>
        <h2>Course Info</h2>
      </u>
      <br />
      <table className="table">
        <tbody>

          <tr>
            <td><h4>Course Id : {courseId}</h4></td>
            <td></td>
          </tr>

          <tr>
            <td><h4>Course Name : {courseName} </h4></td>
            <td><button onClick={()=>{
              courseDispatch(updateCname("React 18"));
            }} className="btn btn-success"> Update Course Name</button></td>
          </tr>


          <tr>
            <td><h4>Course price : {price}</h4></td>
            <td><button onClick={() =>{
              courseDispatch(updatePrice(2000))
            }} className="btn btn-success"> Update Price</button></td>
          </tr>

          <tr>
            <td><h4>Course Trainer : {trainer}</h4></td>
            <td><button onClick={() =>courseDispatch(updateTrainer("Dandin"))} 
              className="btn btn-success"> Update Trainer</button></td>
          </tr>


            
          <tr>
            <td><h4>Course Duration : {duration}</h4></td>
            <td><button onClick={() =>courseDispatch(updateDuration("30 hrs"))} 
              className="btn btn-success"> Update Duration</button></td>
          </tr>
          

        </tbody>
      </table>
    </div>
  );
};


// export default CourseComponent;
export default CourseComponent;
