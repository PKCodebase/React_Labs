import { Component } from "react";
import Course  from "./Course";

class CourseList extends Component{
    state={
        mycourseList:[],
        courseCount:0
    }
    showLowPriceCourses = ()=> { 
        console.log("Lowprice - Clicked"); 
        let coursesToDisplay = this.props.mycourses.filter(mycourse => mycourse.price <= 
        15000); 
        console.log(coursesToDisplay);

        this.setState({ 
            mycourseList : coursesToDisplay, 
            courseCount: coursesToDisplay.length 
            }); 
        }

            showOnlineCourses = ()=> { 
                console.log("Online - Clicked"); 
                let coursesToDisplay = this.props.mycourses.filter(mycourse => mycourse.isOnline 
                === true); 
                console.log(coursesToDisplay);   
                
                this.setState({ 
                    mycourseList : coursesToDisplay, 
                    courseCount: coursesToDisplay.length 
                    }); 
                }

                    showAllCourses = ()=> { 
                        console.log("All - Clicked");

                        this.setState({ 
                        mycourseList:this.props.mycourses, 
                        courseCount: this.props.mycourses.length 
                        }); 
                        } 


                        componentDidMount(){ 
                            this.showAllCourses(); 
                            } 


                            render() { 
                                let courseListData = 
                                this.state.mycourseList.map(mycourse => { 
                                return <Course key={mycourse.cid} 
                                course={mycourse}/> 
                                }) 
                                return ( 
                                <div className="container-fluid"> 
                                <div className="container-fluid"> 
                                <button onClick={this.showAllCourses} className="btn btn-success mybutton btn-lg"> 
                                All Courses 
                                </button> 
                                <button onClick={this.showLowPriceCourses} className="btn btn-success mybutton 
                                btn-lg"> Low Price Courses 
                                </button> 
                                <button onClick={this.showOnlineCourses} className="btn btn-success mybutton btnlg"> 
                                Online Courses 
                                </button> 
                                </div> 
                                <br/> 
                                <h3> Results : {this.state.courseCount} </h3> 
                                <br/> 
                                {courseListData} 
                                </div> 
                                ) 
                                }
                    
                        
}
export default CourseList; 