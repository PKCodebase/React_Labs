import { Component } from 'react'; 
import './Course.css'; 
class Course extends Component { 
 
 state = { 
 courseId:"C-12", 
 courseName:"React 16", 
 price:15000, 
 duration:"50 hours", 
 trainer:"Srinivas Dande", 
 showCourse:false,
 } 

 showCourseInfo = () =>{
    console.log("Button is clicked");
    let courseFlag = this.state.showCourse;

    this.setState({
        showCourse: !courseFlag
    });
 }

 render(){ 
    let mycourseInfo = null;
    
    if(this.state.showCourse===true){
    mycourseInfo = (
<div className="mycourse"> 
 <p> Cid : {this.state.courseId}</p> 
 <p> Cname : { this.state.courseName}</p> 
 <p> Price : { this.state.price}</p> 
 <p> Duration : { this.state.duration}</p> 
 <p> Trainer : { this.state.trainer}</p> 
 </div>
    );
}
 console.log("I am Course Component"); 
 return ( 

    <div>
        <button className='mybutton' onClick={this.showCourseInfo}>Course Info</button>
        {mycourseInfo}
     </div>

 );     
 } 
 } 
export default Course;