import React,{ useState} from "react";


const MyCourses = () =>{


    //const[state,setState] = useState(initialState);


    //1.Using the useState() React Hook
    //CorseSate:variable,setCourseStae:Function
    const[courseState,setCourseState] = useState(
        {
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
        }
);



     const showActiveCourses = () =>{
        console.log("Button is clicked");

        let activeCourses = courseState.mycourseList.filter(mycourse => mycourse.active   ===true)
        
        setCourseState({
            trainerName:"Kundan Prasad",
            trainerEmail:"kaushikprasad1659@gmail.com",
            mycourseList: activeCourses
            });
        }

    const showAllCourses = () =>{
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
                    setCourseState({
                        trainerEmail:"Sri@gmail.com",
                        mycourseList : allCourses
                    });
                }
               
                // coomponentDidMount(){
                //     this.showAllCourses();
                // };

    
    
    
        let courseListToDisplay = courseState.mycourseList.map(
            (mycourse)=>(
                <tr>
                <td><h6>{mycourse.cid}</h6></td>
                <td><h6>{mycourse.cname}</h6></td>
                
                <td><h6>{mycourse.price}</h6></td>
                <td><h6>{mycourse.active}</h6></td>
                </tr>
            )
            );

            let trainerInfo = null;
            if(courseState.trainerName){
                trainerInfo = (<h3>Trainer name:{courseState.trainerName}</h3>)
            }

            return(
                <div className="container-fluid">
                    <div className="container-fluid">
                        <button onClick={showAllCourses} className="btn btn-success mybutton btn-lg">All Course</button>
                        <button onClick={showActiveCourses} className="btn btn-success mybutton btn-lg">Active Course</button>
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
                        {trainerInfo}
                        <h3>Trainer Email: {courseState.trainerEmail}</h3>
                    
                </div>
            )
     
}

export default MyCourses;