
import { FETCH_COURSES_SUCCESS } from "./courseTypes"
import { FETCH_COURSES_REQUEST } from "./courseTypes"
import { FETCH_COURSES_FAILURE } from "./courseTypes"

//1.Define state
const allCoursesInitialState = {
       loadingStatus:false,
       courseList:[],
       error:{}
    }
    
 
    //2.Define the Reducer
const myAllCourseReducer = (currentState = allCoursesInitialState,action) =>{
    switch(action.type){
        case FETCH_COURSES_REQUEST:
            return {
                loadingStatus:true,
                courseList:[],
                error:{}
            }
        case FETCH_COURSES_SUCCESS:
            return {
                loadingStatus:false,
                courseList:action.payload,
                error:{}
                
            }
        case FETCH_COURSES_FAILURE:
            return {
                loadingStatus:false,
                courseList:[],
                error:action.payload
            }

        default:
            return  currentState;
    }
}

export default myAllCourseReducer;