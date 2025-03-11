
import React, { Component } from 'react';
import { updateName,updatePrice,updateDuration,updateTrainer  } from './courseType';
// import { updatePrice } from './courseType';
// import { updateDuration } from './courseType';
// import { updateTrainer } from './courseType';

//1.Create the context
const courseContext = React.createContext(null); 

const myreducer = (state, action)=>{
    console.log("C","Course Context",action.type,action.payload);
    switch(action.type){
        case updateName:
            return {
                 courseName:action.payload
            };
        case updatePrice:
            return {
                 price:action.payload
            };
        case updateDuration:
            return {
                 duration:action.payload
            };
        case updateTrainer:
            return {
                trainer:action.payload
            };
        default:
            return state;
    }
}

export class MyCourseProvider extends Component{
    //2.Define the state properties and Dispatch Function
    state={   
       courseId:101,
       courseName:"Java",
       price:6000,
       duration:"50hrs",
       trainer:"srinivas",
       mydispatch:(action) => {
        console.log("B","course context-Dispatch function");
        this.setState(state=>myreducer(this.state,action));
       }
    }
   render(){
    return(
        <courseContext.Provider value={this.state}>
            {this.props.children}
        </courseContext.Provider>
    );
   }
}

export const MyCourseConsumer = courseContext.Consumer;