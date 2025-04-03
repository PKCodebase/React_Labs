import React, { Component } from 'react';
import { useState } from 'react';
// 1.Create context Object
const studentContext = React.createContext(); 


//Define the intial state
const initialState = {
        studentId:101,
        studentname:"kaushik",
        email:"kp@gmail.com",
        phone:22222,
     
};
export const MyStudentProvider =(props)=>{
    //2.Define the state in Functional component
    
    return(
        // 3.Specify the provider
        <studentContext.Provider value={initialState}>
            {props.children}
        </studentContext.Provider>
    );
}

//  This is used to export whole Context.
// export const MyStudentContext = studentInfoContext;


//4.Export the consumer
export const MyStudentConsumer = studentContext.Consumer;