import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import myAllCourseReducer from "./course/courseReducer";
import logger from "redux-logger";

const rootReducer= combineReducers({
    mycourses:myAllCourseReducer,
});

const mystore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger), // thunk is already included
  });


export default mystore;