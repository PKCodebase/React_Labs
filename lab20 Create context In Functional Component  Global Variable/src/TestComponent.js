import React from "react";
import { useContext } from "react";
import { MyStudentConsumer } from "./studentContext";
import { MyCourseContext } from "./courseContext";

const TestComponent = () => {
  const mystudentData = useContext(MyStudentConsumer);
  const mycourseData = useContext(MyCourseContext);

  const { studentId, studentname, email, phone } = mystudentData;
  const { courseId, courseName, price, trainer } = mycourseData;

  return (
    <div className="container">
      <br />
      <u>
        <h2 className="text-center">Student Info</h2>
      </u>
      <br />
      <div>
        <h3>Student Id: {studentId}</h3>
        <h3>Student Name: {studentname}</h3>
        <h3>Student Email: {email}</h3>
        <h3>Student Phone: {phone}</h3>
        <h3>Course Id: {courseId}</h3>
        <h3>Course Name: {courseName}</h3>
        <h3>Course price: {price}</h3>
        <h3>Course trainer: {trainer}</h3>
      </div>
    </div>
  );
};
export default TestComponent;
