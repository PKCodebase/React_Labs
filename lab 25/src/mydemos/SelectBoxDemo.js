import React from "react"; 
 

import MySelectBox from "../mycomponents/MySelectBox"; 
 
class SelectBoxDemo extends React.Component { 
  constructor() { 
    super(); 
    this.state = { 
      timings: null, 
    }; 
    this.onChangeHandler = this.onChangeHandler.bind(this); 
    this.onSubmitHandler = this.onSubmitHandler.bind(this); 
  } 
 
  onChangeHandler(event) { 
    console.log("onChangeHandler"); 
    this.setState({ 
      timings: event.target.value, 
    }); 
  } 
 
  onSubmitHandler = (event) => { 
    event.preventDefault(); 
    console.log("onSubmitHandler"); 
    console.info(this.state.timings); 
    //Do the Validations 
    //Make Call to Server 
 
    //Form Reset 
    this.setState({ 
      timings: null, 
    }); 
  }; 
 
  render() { 
    const tmingsOptions = ["Select Timings", "WeekDays", "WeekEnds"]; 
    return ( 
      <div className="card-body container col-md-6"> 
        <h3 className="text-center"> SelectBoxDemo </h3> 
        <form onSubmit={this.onSubmitHandler}> 
 
          <MySelectBox 
            mylabel="Tmings" 
            myname="timings" 
            myonChange={this.onChangeHandler} 
            myoptions={tmingsOptions}/> 
             
            <input type="submit" value="Submit Now"
            className="btn btn-primary btn-lg" />
                                      
        </form> 
      </div> 
    ); 
  } 
} 
 
export default SelectBoxDemo;