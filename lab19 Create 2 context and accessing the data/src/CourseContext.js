
import React, { Component } from 'react';

const courseContext = React.createContext(null); 

export class MyCourseProvider extends Component{
    state={   
       courseId:101,
       courseName:"Java",
       price:6000,
       trainer:"srinivas",
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