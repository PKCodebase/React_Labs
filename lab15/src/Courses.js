import { useEffect, useState } from "react";

const Courses = (props) => {
  const [courseState, setCourseState] = useState({
    trainerName: "Srinivas",
    trainerEmail: "sri@gmail.com",
    mycourseList: [
      { cid: 1, cname: "React", price: 20000 },
      { cid: 2, cname: "Java", price: 25000 },
      { cid: 3, cname: "Mysql", price: 10000 },
      { cid: 4, cname: "Node Js", price: 15000 },
      { cid: 5, cname: "Microservices", price: 20000 },
    ],
  });

  useEffect(() => {
    console.log("Courses 1.useEffect - Component Mounted");

    return()=>{
        console.log("Courses 1.useEffect - Component Unmounted");
    }
  });

  useEffect(() => {
    console.log("Courses 2.useEffect - Component Mounted");
    return()=>{
        console.log("Courses 2.useEffect - Component Unmounted");
    }
  });
  useEffect(() => {
    console.log("Courses 3.useEffect - Component Mounted");
    return()=>{
        console.log("Courses 3.useEffect - Component Unmounted");
    }
  });

  const showAllCourses = () => {
    console.log("Button is clicked");
    setCourseState({
      trainerName: "Kaushik",
      trainerEmail: "kp@gmail.com",
      mycourseList: [
        { cid: 1, cname: "React", price: 20000 },
        { cid: 2, cname: "Java", price: 25000 },
        { cid: 3, cname: "Mysql", price: 10000 },
      ],
    });
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={showAllCourses}>
        Show All Courses
      </button>
      <br />
      <br />
      <div className="container">
        <table className="table">
          <tbody>
            {courseState.mycourseList.map((mycourse, myindex) => (
              <tr key={myindex}>
                <td>{mycourse.cid}</td>
                <td>{mycourse.cname}</td>
                <td>{mycourse.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Trainer Name: {courseState.trainerName}</h3>
      <h3>Trainer Email: {courseState.trainerEmail}</h3>
    </div>
  );
};

export default Courses;
