import React, { Component } from "react";
// import MyButton from "../mycomponents/MyButton"; 
import MyCheckBox from "../mycomponents/MyCheckBox"; 


class CheckBoxDemo extends Component{
    state={
        mycourses:[
            { id: 1, value: "React JS", isChecked: true }, 
            { id: 2, value: "Angular ", isChecked: false }, 
            { id: 3, value: "Spring Boot", isChecked: true }, 
            { id: 4, value: "MicroServices", isChecked: false }, 
            { id: 5, value: "DevOps", isChecked: false }, 
        ],
    };

    onChangeHandler = (event)=>{
      console.log("onChnageHandler");
      let mycourses = this.state.mycourses;
      mycourses.forEach((mycourse)=>{
        if(mycourse.value === event.target.value)
            mycourse.isChecked = event.target.checked;
      });
      this.setState({mycourses:mycourses});
    }

    onSubmitHandler = (event)=>{
        event.preventDefault();
        console.log("onSubmitHandler");
        console.log(this.state.mycourses);

        let courseList = [];
        this.state.mycourses.forEach((mycourse)=>{
            if(mycourse.isChecked === true)
                courseList.push(mycourse.value);
        });
        console.log("Selected Courses : ", courseList); 
 
        //reset 
        this.setState({ 
          mycourses: [ 
            { id: 1, value: "React JS", isChecked: false }, 
            { id: 2, value: "Angular ", isChecked: false }, 
            { id: 3, value: "Spring Boot", isChecked: false }, 
            { id: 4, value: "MicroServices", isChecked: false }, 
            { id: 5, value: "Java FSD", isChecked: false }, 
          ], 
        });  
    };

    reder(){
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center"> CheckBoxDemo </h3> 
                <form onSubmit={this.onSubmitHandler}>
                    <div className="checkBox">
                        {this.state.mycourses.map((mycourse)=>{
                            return(
                                <MyCheckBox
                                key={mycourse.id}
                                mylabel={mycourse.value}
                                myvalue={mycourse.value}
                                mychecked={mycourse.isChecked}
                                myonChange = {this.onChangeHandler}
                                 />
                            );
                        })}
                    </div>
                    <input type="submit" value="Submit Now"
                    className="btn btn-primary btn-lg"/>
                </form>
            </div>
        );
    
    };
 
    
};

export default CheckBoxDemo;