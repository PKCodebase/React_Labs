import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceComponent from "./PriceComponent";

// import CourseComponent from "./CourseComponenet";

const App = () => {

  console.log("App renderd")
  const[courseName,setCourseName] = useState("React JS");
  const[coursePrice,setCoursePrice] = useState(20000);

  const updateName = () => {
    if(courseName === "React JS"){
      setCourseName("Angular JS");
    }else{
      setCourseName("React JS");
    }
  }

  const updatePrice = () => {
       if(coursePrice === 20000){
        setCoursePrice(10000);
       }else{
        setCoursePrice(20000);
       }
  }
  return (
      <div className="container">
        <table className="table">
          <tbody>


            <tr>
              <td>Course Name : {courseName}</td>
             <td><button onClick={updateName}className="btn btn-success">Update Name</button></td>
            </tr>

            <tr>
              <td>Course Price : </td>
              <td>{coursePrice}</td>
              <td><button onClick={updatePrice} className="btn btn-success">Update Price</button></td>
            </tr>


          </tbody>
        </table>
        <PriceComponent price={coursePrice}/>
      </div>
  );
};

export default App;
