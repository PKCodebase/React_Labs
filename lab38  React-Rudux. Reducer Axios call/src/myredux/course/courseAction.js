
import { FETCH_COURSES_REQUEST} from "./courseTypes";
import { FETCH_COURSES_SUCCESS } from "./courseTypes";
import { FETCH_COURSES_FAILURE } from "./courseTypes";
import axios from "axios";



export const  fetchCourseRequest = ()  =>{
    return {
        type : FETCH_COURSES_REQUEST,
    
    };
}


export const fetchCourseSuccess = (courses)=>{
    return{
        type:FETCH_COURSES_SUCCESS,
        payload:courses
    }
}

export const fetchCourseFailure = (error)=>{
    return{
        type:FETCH_COURSES_FAILURE,
        payload:error
    }
}

export const fetchAllCourses = () => { 
 
    return (courseDispatch) => { 
 
        courseDispatch(fetchCourseRequest()) //1 
 
        axios.get("https://coursecube.com/jlc-rest-api/mini-courses") 
            .then(response => { 
                const courseList = response.data; 
                courseDispatch(fetchCourseSuccess(courseList)) 
            }) 
            .catch(error => { 
                courseDispatch(fetchCourseFailure(error)) 
            }) 
    } 
} 
