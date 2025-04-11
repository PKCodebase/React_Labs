// -----1

import { UPDATE_CNAME } from "./courseTypes"
import { UPDATE_PRICE } from "./courseTypes"
import { UPDATE_DURATION } from "./courseTypes"
import { UPDATE_TRAINER } from "./courseTypes"


//1.Define state
const initialState = {
        courseId:"C-101",
        courseName:"Java",
        price:6000,
        duration:"50 Hrs",
        trainer:"srinivas",
    }
    
 
    //2.Define the Reducer
const mycourseReducer = (currentState = initialState,action) =>{
    // console.log("courseContext",action.type,action.payload)
    switch(action.type){

        case UPDATE_CNAME:
            return {
                ...currentState,
                courseName:action.payload
            }
        case UPDATE_PRICE:
            return {
                ...currentState,
                price:action.payload
            }
        case UPDATE_DURATION:
            return {
                ...currentState,
                duration:action.payload
            }
        case UPDATE_TRAINER:
            return {
                ...currentState,
                trainer:action.payload
            }

        default:
            return  currentState;
    }
}

export default mycourseReducer;