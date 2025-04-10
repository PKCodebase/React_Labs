
import React from "react";
import { connect } from "react-redux";

const CourseComponent = (props)=>{
        
          // const mycourseData = useContext(MyCourseContext);

          const {courseId,courseName,price,trainer}=props.mycourseData;    
                    return(
                      <div className="container">
                        <br/>
                        <u>
                            <h2 >Course Info</h2>
                        </u>
                        <br/>
                        <div>
                            <h3>Course Id: {courseId}</h3>
                            <h3>Course Name: {courseName}</h3>
                            <h3>Course price: {price}</h3>
                            <h3>Course trainer: {trainer}</h3>
                        </div>
                      </div>

                    );
                }
                const mapStateToProps = (state)=>{
                  return{
                    mycourseData:state.mycourse
                  }
                }
       
// export default CourseComponent;
export default connect(mapStateToProps) (CourseComponent);