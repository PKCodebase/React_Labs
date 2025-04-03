import React from "react";
import { useContext } from "react";
//whenever you wnat to use context data then
//1.import this
import { MyCourseContext } from "./courseContext";

const CourseComponent = (props) => {
  const mycourseConsumer = useContext(MyCourseContext);
  const { courseData, courseDispatch } = mycourseConsumer;
  const { courseId, courseName, price, duration, trainer } = courseData;

  const updateCourseName = (updatedCname) => {
    console.log("A", "updateCourseName", updatedCname);
    courseDispatch({
      type: "updateName",
      payload: updatedCname,
    });
  };

  const updateCoursePrice = (updatedCprice) => {
    console.log("A", "updateCourseName", updatedCprice);
    courseDispatch({
      type: "updatePrice",
      payload: updatedCprice,
    });
  };

  const updateCourseDuration = (updatedDuration) => {
    console.log("A", "updateCourseName", updatedDuration);
    courseDispatch({
      type: "updateDuration",
      payload: updatedDuration,
    });
  };

  const updateCourseTrainer = (updatedTrainer) => {
    console.log("A", "updateCourseName", updatedTrainer);
    courseDispatch({
      type: "updateTrainer",
      payload: updatedTrainer,
    });
  };

  return (
    <div className="container">
      <br />
      <u>
        <h2 className="text-center">Course Info</h2>
      </u>
      <br />
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <h4>Course Id:{courseId}</h4>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>
                <h4>Course Name:{courseName}</h4>
              </td>
              <td>
                <button
                  onClick={updateCourseName.bind(this, "React", courseDispatch)}
                  className="btn btn-success"
                >
                  Update Course Name
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <h4>Course price:{price}</h4>
              </td>
              <td>
                <button
                  onClick={updateCoursePrice.bind(this, 10000, courseDispatch)}
                  className="btn btn-success"
                >
                  Update Price
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <h4>Course duration:{duration}</h4>
              </td>
              <td>
                <button
                  onClick={updateCourseDuration.bind(
                    this,
                    "20hrs",
                    courseDispatch
                  )}
                  className="btn btn-success"
                >
                  Update Duration
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <h4>Course trainer:{trainer}</h4>
              </td>
              <td>
                <button
                  onClick={updateCourseTrainer.bind(
                    this,
                    "kaushik",
                    courseDispatch
                  )}
                  className="btn btn-success"
                >
                  Update Trainer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseComponent;
