//1.Define state
const initialState = {
        courseId:101,
        courseName:"Java",
        price:6000,
        trainer:"srinivas",
    };
    
 
    //2.Define the Reducer
const mycourseReducer = (state = initialState,action) =>{
    switch(action.type){

        default:
            return  state;
    }
}

export default mycourseReducer;