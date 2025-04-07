import React, { useState, useCallback } from "react";

import HeaderComponent from "./HeaderComponent";
import CourseComponent from "./CourseComponent";
import ButtonComponent from "./ButtonComponent";

const TestComponent = (props) => {
  console.log("Test Component");

  const [reactPrice, setReactPrice] = useState(1000);
  const [angularPrice, setAngularPrice] = useState(2000);
  const [javaPrice, setJavaPrice] = useState(2000);

//   const updateReactPrice = () => {
//     console.log("Update React Price");
//     setReactPrice(reactPrice + 1000);
//   };

//   const updateAngularPrice = () => {
//     console.log("Update Angular Price");
//     setAngularPrice(angularPrice + 1000);
//   };

//   const updateJavaPrice = () => {
//     console.log("Update Java Price");
//     setJavaPrice(javaPrice + 1000);
//   };



const updateReactPrice = useCallback(
    () => {
    console.log("Update React Price");
    setReactPrice(reactPrice + 1000);
  },[reactPrice]
);

  const updateAngularPrice = useCallback(
    () => {
    console.log("Update Angular Price");
    setAngularPrice(angularPrice + 1000);
  },[angularPrice]
);

  const updateJavaPrice = useCallback(
    () => {
    console.log("Update Java Price");
    setJavaPrice(javaPrice + 1000);
  },[javaPrice]
);

  return (
    <div className="container">
      <HeaderComponent />
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              <CourseComponent courseName="React" price={reactPrice} />
            </td>
            <td>
              {" "}
              <ButtonComponent
                clickHandler={updateReactPrice}
                courseName="React"
              >
                Update React Price
              </ButtonComponent>
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <CourseComponent courseName="Angular" price={angularPrice} />
            </td>
            <td>
              {" "}
              <ButtonComponent
                clickHandler={updateAngularPrice}
                courseName="Angular"
              >
                Update Angular Price
              </ButtonComponent>
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <CourseComponent courseName="Java" price={javaPrice} />
            </td>
            <td>
              {" "}
              <ButtonComponent clickHandler={updateJavaPrice} courseName="Java">
                Update Java Price
              </ButtonComponent>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestComponent;
