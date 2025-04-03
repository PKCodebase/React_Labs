import React, { useReducer } from "react";
import { updateName, updatePrice, updateDuration, updateTrainer } from "./courseTypes";
// import { MyCourseContext } from "./courseContext";

// 1. Create the context
const courseContext = React.createContext();

// 2. Define initial state
const initialState = {
  courseId: 101,
  courseName: "Java",
  price: 6000,
  duration: "50hrs",
  trainer: "srinivas"
};

// 3. Define the reducer function
const myReducer = (state, action) => {
  console.log("Course Context", action.type, action.payload);
  switch (action.type) {
    case updateName:
      return { ...state, courseName: action.payload };
    case updatePrice:
      return { ...state, price: action.payload };
    case updateDuration:
      return { ...state, duration: action.payload };
    case updateTrainer:
      return { ...state, trainer: action.payload };
    default:
      return state;
  }
};

// 4. Create the Provider Component
export const MyCourseProvider = (props) => {
  const [courseData, courseDispatch] = useReducer(myReducer, initialState);

  return (
    <courseContext.Provider value={
        { 
            courseData:courseData,
            courseDispatch:courseDispatch 
            }
            }>
      {props.children}
    </courseContext.Provider>
  );
};

// 5. Export the context
export const MyCourseContext = courseContext;
