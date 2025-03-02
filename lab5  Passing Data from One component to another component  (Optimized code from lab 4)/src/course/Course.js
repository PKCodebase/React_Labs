import { Component } from 'react'; 
import './Course.css'; 
class Course extends Component { 
 
 state = { 
 showCourse:false,
 } 

 showCourseInfo = () =>{
    let courseFlag = this.state.showCourse;

    this.setState({
        showCourse: !courseFlag
    });
 }

 render(){ 
    console.log("render - componennt")
    let mycourseInfo = null;
    
    if(this.state.showCourse===true){
    mycourseInfo = (
        <div className="mycourse"> 
 <p> Cid : {this.props.mycourse.cId}</p> 
 <p> Cname : { this.props.mycourse.cName}</p> 
 <p> Price : { this.props.mycourse.price}</p> 
 <p> Trainer : { this.props.mycourse.trainer}</p> 
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