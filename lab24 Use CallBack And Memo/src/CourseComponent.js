import React from "react";


const CourseComponent = (props) => {
  console.log("CourseComponent rendered");
  return (
    <div className="container">
      <h3>{props.courseName} - {props.price}</h3>
      <br />
    </div>
  );
};

export default React.memo(CourseComponent);