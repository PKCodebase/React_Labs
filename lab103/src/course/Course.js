import { Component } from "react";
import "./Course.css";

class Course extends Component{

    state = {
        cId:"C-12",
        cName:"Java",
        cFee:12000,
        cTrainer:"Kaushik",
        showCourse:false
    
    }

    showCourseInfo = () =>{
        console.log("button is clicked")
        let clickButton = this.state.showCourse;
        this.setState({
            showCourse:!clickButton
        });
    }


    render(){
         console.log("I am Course")
        let  mycourseInfo = null;
    if(this.state.showCourse===true){
        mycourseInfo=(<div className="mycourse">
            <p>Course Id : {this.state.cId}</p>
            <p>Course Name : {this.state.cName}</p>
            <p>Course Fee : {this.state.cFee}</p>
            <p>Course Trainer : {this.state.cTrainer}</p>
        </div>
        );
    }
        

        return(
            
      <div>
        <button className="mybutton" onClick={this.showCourseInfo}>Course Info </button>
        {mycourseInfo}</div>
    );
    }

}

export default Course;