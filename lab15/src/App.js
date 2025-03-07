import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Courses";

const App = () => {
   const[courseFlagState,setCourseFlagState]=useState(true);
  useEffect(() => {
    console.log("App-1st-useEffect");

    return ()=>{
      console.log("App 1st useEffect Unmounted")
    }
  }); // Runs only once

  useEffect(() => {
    console.log("App-2nd-useEffect");
    return ()=>{
      console.log("App 2nd useEffect Unmounted")
    }
  });

  useEffect(() => {
    console.log("App-3rd-useEffect");
    return ()=>{
      console.log("App 3rd useEffect Unmounted")
    }
   });

  const hideShowCourses =() =>{
   console.log("call showhidecourses");
    setCourseFlagState(!courseFlagState);
  }
  let mycourse = null;
  if(courseFlagState === true){
  mycourse = (<Courses/>)
  }

  return (
    <div className="container">
      <h1 className="text-center">Welcome to Kaushik Page!!!</h1>
      <button className="btn btn-success" onClick={hideShowCourses}>Hide Show Courses</button>
      <br />
      <br/><br/><br/><br/>
     {mycourse}
    </div>
  );
};

export default App;
