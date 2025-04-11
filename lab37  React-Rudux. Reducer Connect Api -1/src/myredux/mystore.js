import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import mycourseReducer from "./course/courseReducer";

const rootReducer= combineReducers({
    mycourse:mycourseReducer,
});

const mystore = configureStore(
    {
        reducer:rootReducer
    }
);



export default mystore;