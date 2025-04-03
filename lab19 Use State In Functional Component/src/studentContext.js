import React, { Component } from 'react';
import { useState } from 'react';
// 1.Create context Object
const studentInfoContext = React.createContext(); 


export const MyStudentProvider =(props)=>{
    //2.Define the state in Functional component
    const [studentInfo,setStudentInfo] = useState(
        {   
            studentId:101,
            studentname:"kaushik",
            email:"kp@gmail.com",
            phone:22222,
         }
    );
  
    return(
        // 3.Specify the provider
        <studentInfoContext.Provider value={studentInfo}>
            {props.children}
        </studentInfoContext.Provider>
    );
}

//  This is used to export whole Context.
// export const MyStudentContext = studentInfoContext;


//4.Export the consumer
//This is used to export only to  the consumer.
export const MyStudentConsumer = studentInfoContext.Consumer;