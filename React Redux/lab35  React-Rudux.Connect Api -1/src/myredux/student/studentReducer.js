
const initialState = {
    studentId : 101,
    studentName : "Kaushik",
    email : "kaushikprasad1659@gmail.com",
    phone :8709252029
}

const mystudentReducer = (state=initialState,action)=>{
    switch(action.type){

        default:
            return state;
    }
}

export default mystudentReducer;