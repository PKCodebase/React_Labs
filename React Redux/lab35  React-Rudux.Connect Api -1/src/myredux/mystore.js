import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import mycourseReducer from "./course/courseReducer";
import mystudentReducer from "./student/studentReducer";

const rootReducer= combineReducers({
    mycourse:mycourseReducer,
    mystudent:mystudentReducer
});

const mystore = configureStore(
    {
        reducer:rootReducer
    }
);



export default mystore;