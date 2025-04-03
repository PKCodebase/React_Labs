

import React from 'react';
import { useState } from 'react';

const courseContext = React.createContext(); 

export const MyCourseProvider = (props)=>{
    
    //Define state
    const[courseInfo,setCourseInfo] = useState({
        courseId:101,
        courseName:"Java",
        price:6000,
        trainer:"srinivas",
    });
    
   
    return(
        <courseContext.Provider value={courseInfo}>
            {props.children}
        </courseContext.Provider>
    );
}


//exporting context
export const MyCourseContext = courseContext;