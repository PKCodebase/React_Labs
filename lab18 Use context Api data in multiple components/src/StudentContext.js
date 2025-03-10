import React, { Component } from 'react';

// 1.Create context Object
const studentInfoContext = React.createContext(null); 

export class MyStudentProvider extends Component{
    state={   //2.Define the state
       studentId:101,
       studentname:"kaushik",
       email:"kp@gmail.com",
       phone:22222,
    }
   render(){
    return(
        // 3.Specify the provider
        <studentInfoContext.Provider value={this.state}>
            {/* This is used to pass only specific value.acess only email */}
            {/* <studentInfoContext.Provider value={this.state.email}> */}
            {this.props.children}
        </studentInfoContext.Provider>
    );
   }
}

//  This is used to export whole Context.
// export const MyStudentContext = studentInfoContext;


//4.Export the consumer
//This is used to export only to  the consumer.
export const MyStudentConsumer = studentInfoContext.Consumer;