import { Component } from "react";


class MyCourses extends Component{

    state={
        trainerName:"Kaushik Prasad",
        trainerEmail:"kp@gmail.com",
        mycourseList :[ 
            { 
              cid : 101,
              cname : "Angular",
              trainer : "Srinivas",
              price: 15000, 
              active:true 
            }, 
            {
                cid : 102,
                cname : "React JS",
                trainer : "Srinivas",
                price: 15000,
                active:false 
            }, 
            { 
                cid : 103,
                 cname : "Java FSD",
                  trainer : "Srinivas",
                   price: 55000, 
                   active:false 
            }, 
            { 
                cid : 104,
                cname : "Spring Boot",
                trainer : "Srinivas",
                price: 25000,
                active:true
            }, 
            { 
                cid :105,
                cname : "MicroServices",
                trainer:"Srinivas",
                price:225000,
                active:true 
            }, 
            ] 
    };

    showActiveCourses = () =>{
        console.log("Button is clicked");
        let activeCourses = this.state.mycourseList.filter(mycourse => mycourse.active   ===true)
        this.setState({
            trainerEmail:"kaushikprasad1659@gmail.com",
            mycourseList: activeCourses
            });
        }

    // showLowPriceCourses = () =>{
    //             console.log("Lowprice clicked");
    //             let coursesToDisplay = this.props.mycourses.filter(
    //                 console.log(coursesToDisplay));
    //                 this.setState({
    //                     mycourseList : coursesToDisplay,
    //                     courseCount : coursesToDisplay.length
    //                 });
    //             }

    // showOnlineCourses = () =>{
    //                 console.log("Online - clicked");
    //                 let coursesToDisplay = this.props.mycourses.filter(
    //                     console.log(coursesToDisplay));
    //                     this.setState({
    //                         mycourseList : coursesToDisplay,
    //                         courseCount : coursesToDisplay.length
    //                     });
    //             }
    showAllCourses = () =>{
                    console.log("Show All courses - called");

                      let allCourses = [
                        { 
                        cid : 101,
                        cname : "Angular",
                        trainer : "Srinivas",
                        price: 15000, 
                        active:true 
                      }, 
                      {
                          cid : 102,
                          cname : "React JS",
                          trainer : "Srinivas",
                          price: 15000,
                          active:false 
                      }, 
                      { 
                          cid : 103,
                           cname : "Java FSD",
                            trainer : "Srinivas",
                             price: 55000, 
                             active:false 
                      }, 
                      { 
                          cid : 104,
                          cname : "Spring Boot",
                          trainer : "Srinivas",
                          price: 25000,
                          active:true
                      }, 
                      { 
                          cid :105,
                          cname : "MicroServices",
                          trainer:"Srinivas",
                          price:225000,
                          active:true 
                      } 
                      ];
                    this.setState({
                        trainerEmail:"Sri@gmail.com",
                        mycourseList : allCourses
                    });
                }
               
                coomponentDidMount(){
                    this.showAllCourses();

    
    }
    render(){
        let courseListToDisplay = this.state.mycourseList.map(
            (mycourse)=>(
                <tr>
                <td><h6>{mycourse.cid}</h6></td>
                <td><h6>{mycourse.cname}</h6></td>
                
                <td><h6>{mycourse.price}</h6></td>
                <td><h6>{mycourse.active}</h6></td>
                </tr>
            )
            );
            return(
                <div className="container-fluid">
                    <div className="container-fluid">
                        <button onClick={this.showAllCourses} className="btn btn-success mybutton btn-lg">All Course</button>
                        <button onClick={this.showActiveCourses} className="btn btn-success mybutton btn-lg">Active Course</button>
                       </div>
                       <br/>
                       <br/>
                       <table>
                            <thead>
                                <tr>
                                    <th>Course Id</th>
                                    <th>Course Name</th>
                                    {/* <th>Trainer</th> */}
                                    <th>Price</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseListToDisplay}
                            </tbody>
                        </table>
                        <h3>Trainer name: {this.state.trainerName}</h3>
                        <h3>Trainer Email: {this.state.trainerEmail}</h3>
                    
                </div>
            )
    }
}

export default MyCourses;